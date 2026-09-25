import { Store } from '@tanstack/react-store'
import { api_ai_analyze } from '@api/ai.api'
import { store_user } from '@store/user.store'

export type type_message_role = 'user' | 'assistant'

export type type_decision_status =
  | 'good_fit'
  | 'worth_considering'
  | 'potential_concern'
  | 'compare_first'
  | 'not_enough_information'

export interface type_decision {
  decision_status: type_decision_status
  decision_summary: string
  decision_confidence?: number
  decision_confidence_label?: string
}

export interface type_product_context {
  product_name: string
  product_brand?: string
  product_category?: string
  product_barcode?: string
  product_image?: string
}

export interface type_workflow_step {
  sequence?: number
  step_id?: string
  agent?: string
  status?: string
  title?: string
  detail?: string
  metadata?: {
    tool?: string | null
    duration_ms?: number | null
  }
}

export interface type_message {
  message_id: string
  message_role: type_message_role
  message_content: string
  created_at: string
  product_context?: type_product_context
  decision?: type_decision
  sources?: { source_title: string; source_url?: string }[]
  steps?: type_workflow_step[]
  reasons?: string[]
  outcome?: string
  limitations?: string[]
}

interface type_chat_state {
  messages: type_message[]
  input_value: string
  is_sending: boolean
  is_investigating: boolean
  active_conversation_id: string | null
  attached_product: type_product_context | null
  investigation_steps: type_workflow_step[]
  error: string | null
}

const initial_state: type_chat_state = {
  messages: [],
  input_value: '',
  is_sending: false,
  is_investigating: false,
  active_conversation_id: null,
  attached_product: null,
  investigation_steps: [],
  error: null,
}

export const store_chat = new Store(initial_state)

export const store_set_chat = (data: Partial<type_chat_state>) => {
  store_chat.setState((state) => ({
    ...state,
    ...data,
  }))
}

export const store_chat_add_message = (message: type_message) => {
  store_chat.setState((state) => ({
    ...state,
    messages: [...state.messages, message],
  }))
}

function parse_sse_block(block: string): { event: string; data: any } | null {
  if (!block.trim()) return null
  if (block.trimStart().startsWith(':')) return null

  let event_name = 'message'
  const data_lines: string[] = []

  for (const line of block.split('\n')) {
    if (line.startsWith('event:')) {
      event_name = line.slice(6).trim()
    }
    if (line.startsWith('data:')) {
      data_lines.push(line.slice(5).trimStart())
    }
  }

  if (!data_lines.length) return null

  try {
    return {
      event: event_name,
      data: JSON.parse(data_lines.join('\n')),
    }
  } catch {
    return null
  }
}

function merge_workflow_step(
  previous: type_workflow_step[],
  incoming: type_workflow_step,
): type_workflow_step[] {
  const index = previous.findIndex(
    (step) => step.step_id && step.step_id === incoming.step_id,
  )

  if (index === -1) {
    return [...previous, incoming]
  }

  const next = [...previous]
  next[index] = { ...previous[index], ...incoming }
  return next
}

function outcome_to_decision_status(outcome?: string, status?: string): type_decision_status {
  if (status === 'error') return 'potential_concern'
  if (outcome === 'evidence_found') return 'potential_concern'
  if (outcome === 'no_evidence_found' || outcome === 'no_matching_evidence') return 'good_fit'
  if (outcome === 'mixed') return 'compare_first'
  if (outcome === 'needs_review' || outcome === 'needs_input') return 'worth_considering'
  return 'not_enough_information'
}

async function consume_sse_stream(response: Response) {
  const reader = response.body!.getReader()
  const decoder = new TextDecoder()
  let buffer = ''

  while (true) {
    const { done, value } = await reader.read()

    buffer += decoder.decode(value || new Uint8Array(), { stream: !done })
    buffer = buffer.replaceAll('\r\n', '\n').replaceAll('\r', '\n')

    let boundary = buffer.indexOf('\n\n')

    while (boundary >= 0) {
      const block = buffer.slice(0, boundary)
      buffer = buffer.slice(boundary + 2)

      const parsed = parse_sse_block(block)
      if (parsed) handle_sse_event(parsed.event, parsed.data)

      boundary = buffer.indexOf('\n\n')
    }

    if (done) break
  }

  if (buffer.trim()) {
    const parsed = parse_sse_block(buffer)
    if (parsed) handle_sse_event(parsed.event, parsed.data)
  }
}

function handle_sse_event(event: string, data: any) {
  if (event === 'step') {
    const step: type_workflow_step = {
      sequence: data.sequence,
      step_id: data.step_id,
      agent: data.agent,
      status: data.status,
      title: data.title,
      detail: data.detail,
      metadata: data.metadata,
    }

    store_chat.setState((state) => ({
      ...state,
      investigation_steps: merge_workflow_step(state.investigation_steps, step),
    }))
  } else if (event === 'result') {
    handle_result_event(data)
  } else if (event === 'error') {
    const message = data?.message || 'ZAATOT could not complete the analysis.'

    store_chat.setState((state) => ({
      ...state,
      is_sending: false,
      is_investigating: false,
      error: message,
    }))

    store_chat_add_message({
      message_id: crypto.randomUUID(),
      message_role: 'assistant',
      message_content: message,
      created_at: new Date().toISOString(),
      decision: {
        decision_status: 'not_enough_information',
        decision_summary: message,
      },
    })
  }
}

function handle_result_event(raw: any) {
  const data = raw?.data ?? raw
  const summary = data.explanation?.summary || 'ZAATOT completed the analysis.'
  const reasons: string[] = data.explanation?.reasons || []
  const decision_status = outcome_to_decision_status(data.outcome, data.status)

  let message_text = summary
  if (reasons.length) {
    message_text += '\n\n' + reasons.map((r: string) => `• ${r}`).join('\n')
  }

  const sources = (data.sources || []).map((s: any) => ({
    source_title: s.provider || s.title || 'Source',
    source_url: s.url,
  }))

  const assistant_message: type_message = {
    message_id: data.execution_id || crypto.randomUUID(),
    message_role: 'assistant',
    message_content: message_text,
    created_at: new Date().toISOString(),
    decision: {
      decision_status,
      decision_summary: summary,
    },
    sources,
    steps: data.steps || store_chat.state.investigation_steps,
    reasons,
    outcome: data.outcome,
    limitations: data.limitations,
  }

  store_chat.setState((state) => ({
    ...state,
    messages: [...state.messages, assistant_message],
    is_sending: false,
    is_investigating: false,
  }))
}

function handle_json_fallback(raw: any) {
  const data = raw?.data ?? raw
  const summary = data.explanation?.summary || 'ZAATOT completed the analysis.'
  const reasons: string[] = data.explanation?.reasons || []
  const decision_status = outcome_to_decision_status(data.outcome, data.status)

  let message_text = summary
  if (reasons.length) {
    message_text += '\n\n' + reasons.map((r: string) => `• ${r}`).join('\n')
  }

  const sources = (data.sources || []).map((s: any) => ({
    source_title: s.provider || s.title || 'Source',
    source_url: s.url,
  }))

  const assistant_message: type_message = {
    message_id: data.execution_id || crypto.randomUUID(),
    message_role: 'assistant',
    message_content: message_text,
    created_at: new Date().toISOString(),
    decision: {
      decision_status,
      decision_summary: summary,
    },
    sources,
    steps: data.steps || [],
    reasons,
    outcome: data.outcome,
    limitations: data.limitations,
  }

  store_chat.setState((state) => ({
    ...state,
    messages: [...state.messages, assistant_message],
    is_sending: false,
    is_investigating: false,
  }))
}

export const store_chat_send_message = async (content: string) => {
  const user_id_str = store_user.state.user_id
  const user_id = user_id_str ? parseInt(user_id_str, 10) : 0

  const user_message: type_message = {
    message_id: crypto.randomUUID(),
    message_role: 'user',
    message_content: content,
    created_at: new Date().toISOString(),
  }

  store_chat.setState((state) => ({
    ...state,
    messages: [...state.messages, user_message],
    input_value: '',
    is_sending: true,
    is_investigating: true,
    investigation_steps: [],
    error: null,
  }))

  try {
    const response = await api_ai_analyze({}, { prompt: content, user_id })
    const content_type = response.headers.get('Content-Type') || ''

    if (content_type.includes('text/event-stream')) {
      await consume_sse_stream(response)
    } else {
      const data = await response.json()
      handle_json_fallback(data)
    }
  } catch (error: any) {
    store_chat.setState((state) => ({
      ...state,
      is_sending: false,
      is_investigating: false,
      error: error.message || 'Failed to connect to ZAATOT AI',
    }))

    store_chat_add_message({
      message_id: crypto.randomUUID(),
      message_role: 'assistant',
      message_content: 'Sorry, I encountered an error and could not complete the analysis.',
      created_at: new Date().toISOString(),
      decision: {
        decision_status: 'not_enough_information',
        decision_summary: error.message || 'Connection failed',
      },
    })
  }
}

export const store_chat_reset = () => {
  store_chat.setState(() => ({ ...initial_state }))
}
