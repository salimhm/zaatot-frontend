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

export interface type_message {
  message_id: string
  message_role: type_message_role
  message_content: string
  created_at: string
  product_context?: type_product_context
  decision?: type_decision
  sources?: { source_title: string; source_url?: string }[]
}

interface type_chat_state {
  messages: type_message[]
  input_value: string
  is_sending: boolean
  is_investigating: boolean
  active_conversation_id: string | null
  attached_product: type_product_context | null
  error: string | null
}

const initial_state: type_chat_state = {
  messages: [],
  input_value: '',
  is_sending: false,
  is_investigating: false,
  active_conversation_id: null,
  attached_product: null,
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
    is_sending: false,
    is_investigating: true,
    error: null,
  }))

  try {
    const response = await api_ai_analyze({}, {prompt: content, user_id })
    const data = response.data

    let summary = data.explanation || 'Analysis complete.'
    let status: type_decision_status = 'not_enough_information'

    if (data.status === 'error') {
      summary = data.limitations?.[0] || 'An error occurred during analysis.'
      status = 'potential_concern'
    } else if (data.explanation) {
      status = 'worth_considering'
    }

    const assistant_message: type_message = {
      message_id: crypto.randomUUID(),
      message_role: 'assistant',
      message_content: summary,
      created_at: new Date().toISOString(),
      decision: {
        decision_status: status,
        decision_summary: summary,
      },
      sources: data.sources?.map((s: any) => ({ source_title: typeof s === 'string' ? s : s.title || 'Source', source_url: s.url })) || [],
    }

    store_chat.setState((state) => ({
      ...state,
      messages: [...state.messages, assistant_message],
      is_investigating: false,
    }))
  } catch (error: any) {
    store_chat.setState((state) => ({
      ...state,
      is_investigating: false,
      error: error.message || 'Failed to connect to ZAATOT AI',
    }))
    
    // Add an error message to the chat
    store_chat_add_message({
      message_id: crypto.randomUUID(),
      message_role: 'assistant',
      message_content: 'Sorry, I encountered an error and could not complete the analysis.',
      created_at: new Date().toISOString(),
      decision: {
        decision_status: 'not_enough_information',
        decision_summary: error.message || 'Connection failed',
      }
    })
  }
}

export const store_chat_reset = () => {
  store_chat.setState(() => ({ ...initial_state }))
}
