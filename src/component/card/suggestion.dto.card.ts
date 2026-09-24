import type { ReactNode } from 'react'

export interface dto_card_suggestion {
  in: {
    suggestion_text: string
    suggestion_icon?: ReactNode
    on_click: (text: string) => void
  }
  out: ReactNode
}
