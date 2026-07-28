import type { ReactElement } from 'react'

export interface dto_modal_confirmation {
  in: {
    opened: boolean
    on_close: () => void
    on_confirm: () => void
    title?: string
    message?: string
    loading?: boolean
    confirm_label?: string
    confirm_color?: string
  }
  out: ReactElement
}
