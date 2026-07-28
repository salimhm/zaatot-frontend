import type { ReactElement } from 'react'

export interface dto_card_brand {
  in: {
    brand_name: string | null
    brand_is_boycotted: boolean
  }
  out: ReactElement
}
