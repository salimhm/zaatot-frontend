import { api } from '@api/index'
import type { dto_api_boycott_provider } from '@api/boycott-provider.dto.api'

export async function api_boycott_provider_search(body: dto_api_boycott_provider.search['body']) {
  const { data, error } = await api['boycott-provider'].search.post(body)
  if (error) throw error
  return data
}

export async function api_boycott_provider_decide(body: dto_api_boycott_provider.decide['body']) {
  const { data, error } = await api['boycott-provider'].decide.post(body)
  if (error) throw error
  return data
}
