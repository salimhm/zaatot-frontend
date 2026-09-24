import { Store } from '@tanstack/react-store'

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

export const store_chat_send_message = (content: string) => {
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

  // Future: call API here, then add assistant message and set is_investigating = false
  // For now, stop investigating after a brief delay to show the animation
  setTimeout(() => {
    store_set_chat({ is_investigating: false })
  }, 2500)
}

export const store_chat_reset = () => {
  store_chat.setState(() => ({ ...initial_state }))
}
