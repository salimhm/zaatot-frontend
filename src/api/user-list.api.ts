import { api } from '@api/index'
import type { dto_api_user_list } from '@api/user-list.dto.api'

export async function api_user_list_find(query: dto_api_user_list.find['query']) {
  const default_query = {
    ...query,
    columns: query.columns ?? ['created_at', 'product_id', 'user_list_id', 'user_list_type'],
  }
  const { data, error } = await api['user-list'].get({ query: default_query as any })
  if (error) {
    if ((error.status as any) === 404) {
      return { data: [] }
    }
    throw error
  }
  return data
}

export async function api_user_list_create(body: dto_api_user_list.create['body']) {
  const { data, error } = await api['user-list'].post(body)
  if (error) throw error
  return data
}

export async function api_user_list_delete(body: dto_api_user_list.remove['body']) {
  const { data, error } = await api['user-list'].delete(body)
  if (error) throw error
  return data
}
