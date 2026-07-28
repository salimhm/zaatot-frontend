export interface dto_api_product {
  created_at: string
  product_id: number
  product_barcode: string
  product_type: 'food'
  product_name: string | null
  brand_id: number | null
  product_images: string[] | null
  product_nova_group: 1 | 2 | 3 | 4 | null
  product_ecoscore: 'a' | 'b' | 'c' | 'd' | 'e' | null
  product_nutriscore: 'a' | 'b' | 'c' | 'd' | 'e' | null
  product_metadata: {
    ingredients: string[] | null
    allergens: string[]
  } | null
  updated_at: string
  brand_name: string | null
  brand_is_boycotted: boolean | null
  brand_boycott_reasons: string[] | null
  brand_boycott_alternatives: string[] | null
}

export namespace dto_api_product_query {
  export interface find {
    query: {
      product_id?: number[]
      product_barcode?: string[]
      product_type?: 'food'[]
      product_name?: string[]
      brand_id?: number[]
      product_nova_group?: (1 | 2 | 3 | 4)[]
      product_ecoscore?: ('a' | 'b' | 'c' | 'd' | 'e')[]
      product_nutriscore?: ('a' | 'b' | 'c' | 'd' | 'e')[]
      page?: number
      take?: number
      combination_type?: 'AND' | 'OR'
      order_by?: string[]
      columns: (
        | 'created_at'
        | 'product_id'
        | 'product_barcode'
        | 'product_type'
        | 'product_name'
        | 'brand_id'
        | 'product_images'
        | 'product_nova_group'
        | 'product_ecoscore'
        | 'product_nutriscore'
        | 'product_metadata'
        | 'updated_at'
        | 'brand_name'
        | 'brand_is_boycotted'
        | 'brand_boycott_reasons'
        | 'brand_boycott_alternatives'
      )[]
    }
  }
}
