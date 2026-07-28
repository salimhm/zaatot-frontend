import type { dto_api_product } from '@api/product.dto.api'
import type { dto_api_boycott_provider_decision, dto_api_boycott_provider_search } from '@api/boycott-provider.dto.api'

export namespace dto_api_scan {
  export interface barcode {
    body: {
      barcode: string
    }
    response: {
      data: {
        product: dto_api_product | null
        source: 'cache' | 'provider'
      }
    }
  }

  export interface identify {
    body: {
      scan_value: string
    }
    response: {
      data: {
        scan: {
          scan_type: 'barcode' | 'url' | 'text' | 'unknown'
          raw_value: string
          barcode: string | null
          query: string | null
        }
        product: dto_api_product | null
        boycott_decision: dto_api_boycott_provider_decision | null
        boycott_search: dto_api_boycott_provider_search | null
        source: {
          product: 'cache' | 'provider' | null
          boycott: 'provider' | 'search' | 'unavailable' | 'not_requested'
        }
      }
    }
  }
}
