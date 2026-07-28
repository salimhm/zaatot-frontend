import type { ReactElement } from 'react'

export interface dto_card_brand_boycott_status {
  in: {
    brand_is_boycotted?: boolean | null
    brand_boycott_reasons?: string[] | null
    brand_boycott_alternatives?: string[] | null
  }
  out: ReactElement
}
