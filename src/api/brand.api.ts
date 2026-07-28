import { api } from '@api/index'
import type { dto_api_brand_query } from '@api/brand.dto.api'

export async function api_brand_find(query: dto_api_brand_query.find['query']) {
  const { data, error } = await api.brand.get({ query: query as any })
  if (error) throw error
  return data
}
