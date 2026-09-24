import type { ReactNode } from 'react'

export interface dto_chat_evidence {
  in: {
    sources: { source_title: string; source_url?: string }[]
  }
  out: ReactNode
}
