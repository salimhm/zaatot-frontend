import type { ReactNode } from 'react'

export interface dto_chat_welcome {
  in: {
    on_suggestion_click: (prompt: string) => void
  }
  out: ReactNode
}
