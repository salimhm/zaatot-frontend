import type { ReactElement } from 'react'

export interface dto_card_product_profile {
  in: {
    product_name?: string | null
    product_type: 'food'
    brand_name: string | null
    brand_is_boycotted: boolean | null
    brand_boycott_reasons: string[] | null
    brand_boycott_alternatives: string[] | null
    product_ecoscore: 'a' | 'b' | 'c' | 'd' | 'e' | null
    product_nova_group: 1 | 2 | 3 | 4 | null
    product_nutriscore: 'a' | 'b' | 'c' | 'd' | 'e' | null
    product_metadata?: {
      ingredients: string[] | null
      allergens: string[]
    } | null
    product_images?: string[] | null

    is_whitelisted?: boolean
    is_blacklisted?: boolean
    on_add_to_whitelist?: () => void
    on_add_to_blacklist?: () => void
    on_remove_from_whitelist?: () => void
    on_remove_from_blacklist?: () => void
    is_loading_whitelist?: boolean
    is_loading_blacklist?: boolean
    is_loading_remove_whitelist?: boolean
    is_loading_remove_blacklist?: boolean
  }
  out: ReactElement
}
