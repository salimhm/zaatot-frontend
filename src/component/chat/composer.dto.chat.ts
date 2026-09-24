import type { ReactNode } from 'react'

export interface dto_chat_composer {
  in: {
    input_value: string
    on_input_change: (value: string) => void
    on_send: () => void
    is_sending: boolean
  }
  out: ReactNode
}
