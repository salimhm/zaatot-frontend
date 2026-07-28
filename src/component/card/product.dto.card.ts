import type { ReactElement } from 'react'

export interface dto_card_product {
  in: {
    product_name?: string | null
    product_barcode: string
    created_at?: string
    product_images?: string[] | null
    status: 'success' | 'unknown'
  }
  out: ReactElement
}
