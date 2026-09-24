import type { ReactNode } from 'react'
import type { type_decision } from '@store/chat.store'

export interface dto_chat_message_zaatot {
  in: {
    message_content: string
    created_at: string
    decision?: type_decision
    sources?: { source_title: string; source_url?: string }[]
  }
  out: ReactNode
}
