export interface dto_api_boycott_provider_search_result {
  brand_name: string
  campaign_name?: string
  campaign_tier?: number
  decision_status: 'boycott' | 'not_boycotted' | 'unknown' | 'needs_review'
  confidence: number
  reason: string
}

export interface dto_api_boycott_provider_search {
  provider: 'boycat'
  provider_status: 'matched' | 'not_found' | 'unavailable' | 'invalid_response'
  query: string
  results: dto_api_boycott_provider_search_result[]
}

export interface dto_api_boycott_provider_alternative {
  name: string
  image_url?: string
  description?: string
}

export interface dto_api_boycott_provider_source {
  source_name: string
  source_url: string
  title?: string
  url: string
  quote?: string
}

export interface dto_api_boycott_provider_campaign {
  name?: string
  reasoning?: string
  source?: string
  created_at?: string
  tier?: {
    level?: number
    title?: string
    description?: string
  } | null
}

export interface dto_api_boycott_provider_decision {
  provider: 'boycat'
  provider_status: 'matched' | 'not_found' | 'unavailable' | 'invalid_response'
  decision_status: 'boycott' | 'not_boycotted' | 'unknown' | 'needs_review'
  confidence: number
  reason: string
  matched_entity: {
    name: string
    entity_type: 'product' | 'brand' | 'company'
    matched_name: string
    match_type: 'exact' | 'alias' | 'website' | 'fuzzy' | 'related_entity' | 'none'
    match_score: number
  } | null
  campaigns: dto_api_boycott_provider_campaign[]
  sources: dto_api_boycott_provider_source[]
  alternatives: dto_api_boycott_provider_alternative[]
}

export namespace dto_api_boycott_provider {
  export interface search {
    body: {
      provider?: 'boycat'
      query: string
    }
    response: {
      data: dto_api_boycott_provider_search
    }
  }

  export interface decide {
    body: {
      provider?: 'boycat'
      brand_name?: string
      product_brand_name?: string
      product_name?: string
    }
    response: {
      data: dto_api_boycott_provider_decision
    }
  }
}
