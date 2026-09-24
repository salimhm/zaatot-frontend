import type { ReactNode } from 'react'

export interface dto_card_product_context {
  in: {
    product_name: string
    product_brand?: string
    product_category?: string
    product_barcode?: string
    product_image?: string
  }
  out: ReactNode
}
