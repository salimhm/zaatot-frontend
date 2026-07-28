export interface dto_api_boycott_decision_alternative {
  name: string
  description?: string
  website_url?: string
}

export interface dto_api_boycott_decision_source {
  title?: string
  quote?: string
  source_name: string
  source_url: string
  url: string
}

export interface dto_api_boycott_decision_response {
  reason: string
  confidence: number
  decision_status: 'boycott' | 'not_boycotted' | 'unknown' | 'needs_review'
  matched_entity: {
    name: string
    entity_type: 'product' | 'brand' | 'company'
    matched_name: string
    match_type: 'exact' | 'alias' | 'website' | 'fuzzy' | 'related_entity' | 'none'
    match_score: number
  } | null
  matched_path: string[]
  alternatives: dto_api_boycott_decision_alternative[]
  sources: dto_api_boycott_decision_source[]
}

export namespace dto_api_boycott_decision {
  export interface decide {
    body: {
      product_name?: string
      product_brand_name?: string
      product_company_name?: string
      product_website_url?: string
      product_category_tags?: string[]
      candidate_names?: string[]
    }
    response: {
      data: dto_api_boycott_decision_response
    }
  }
}
