import type { ReactNode } from 'react'
import type { type_decision, type_workflow_step } from '@store/chat.store'

export interface dto_chat_message_zaatot {
  in: {
    message_content: string
    created_at: string
    decision?: type_decision
    sources?: { source_title: string; source_url?: string }[]
    steps?: type_workflow_step[]
    reasons?: string[]
    outcome?: string
    limitations?: string[]
  }
  out: ReactNode
}
