import type { dto_api_product } from '@api/product.dto.api'

export namespace dto_api_user_list {
  export interface find {
    query: {
      product_id?: number[]
      count?: 'false' | 'true'
      page?: number
      take?: number
      combination_type?: 'AND' | 'OR'
      order_by?: string[]
      group_by?: ('created_at' | 'product_id' | 'user_list_id' | 'user_list_type')[]
      user_list_id?: number[]
      user_list_type?: ('whitelist' | 'blacklist')[]
      columns?: ('created_at' | 'product_id' | 'user_list_id' | 'user_list_type')[]
    }
    response: {
      data: {
        product?: dto_api_product | null
        created_at?: string
        product_id?: number
        user_list_id?: number
        user_list_type?: 'whitelist' | 'blacklist'
      }[]
      page: number
      take: number
      rows: number | null
      pages: number | null
    }
  }

  export interface create {
    body: {
      product_id: number
      user_list_type: 'whitelist' | 'blacklist'
    }
    response: {
      data: {
        product: dto_api_product | null
        created_at: string
        product_id: number
        user_list_id: number
        user_list_type: 'whitelist' | 'blacklist'
      }
    }
  }

  export interface remove {
    body: {
      product_id: number
    }
    response: {
      data: {
        product: dto_api_product | null
        created_at: string
        product_id: number
        user_list_id: number
        user_list_type: 'whitelist' | 'blacklist'
      }
    }
  }
}
