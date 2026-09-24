import type { ReactNode } from 'react'

export interface dto_chat_message_user {
  in: {
    message_content: string
    created_at: string
  }
  out: ReactNode
}
