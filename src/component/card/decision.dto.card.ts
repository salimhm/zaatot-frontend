import type { ReactNode } from 'react'
import type { type_decision_status } from '@store/chat.store'

export interface dto_card_decision {
  in: {
    decision_status: type_decision_status
    decision_summary: string
    decision_confidence?: number
    decision_confidence_label?: string
  }
  out: ReactNode
}
