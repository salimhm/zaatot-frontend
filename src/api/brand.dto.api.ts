export interface dto_api_brand {
  created_at: string
  brand_id: number
  brand_name: string
  brand_is_boycotted: boolean
  brand_boycott_reasons: string[] | null
  brand_boycott_alternatives: string[] | null
}

export namespace dto_api_brand_query {
  export interface find {
    query: {
      brand_id?: number[]
      brand_name?: string[]
      brand_is_boycotted?: boolean[]
      page?: number
      take?: number
      combination_type?: 'AND' | 'OR'
      order_by?: string[]
      columns: (
        | 'created_at'
        | 'brand_id'
        | 'brand_name'
        | 'brand_is_boycotted'
        | 'brand_boycott_reasons'
        | 'brand_boycott_alternatives'
      )[]
    }
  }
}
