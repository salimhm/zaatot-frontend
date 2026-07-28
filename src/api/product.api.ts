import { api } from '@api/index'
import type { dto_api_product_query } from '@api/product.dto.api'

export async function api_product_find(query: dto_api_product_query.find['query']) {
  const { data, error } = await api.product.get({ query: query as any })
  if (error) throw error
  return data
}
