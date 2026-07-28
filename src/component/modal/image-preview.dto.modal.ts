import type { ReactElement } from 'react'

export interface dto_modal_image_preview {
  in: {
    opened: boolean
    on_close: () => void
    src: string
    alt?: string
  }
  out: ReactElement
}
