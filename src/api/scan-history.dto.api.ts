import type { dto_api_product } from '@api/product.dto.api'

export namespace dto_api_scan_history {
  export interface find {
    query: {
      product_id?: number[]
      product_barcode?: string[]
      count?: 'false' | 'true'
      page?: number
      take?: number
      combination_type?: 'AND' | 'OR'
      order_by?: string[]
      group_by?: ('product_id' | 'product_barcode' | 'scan_history_id' | 'scanned_at')[]
      scan_history_id?: number[]
      columns?: ('product_id' | 'product_barcode' | 'scan_history_id' | 'scanned_at')[]
    }
    response: {
      data: {
        product?: dto_api_product | null
        product_id?: number
        product_barcode?: string
        scan_history_id?: number
        scanned_at?: string
      }[]
      page: number
      take: number
      rows: number | null
      pages: number | null
    }
  }
}
