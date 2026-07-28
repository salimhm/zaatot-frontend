import { api } from '@api/index'
import type { dto_api_user } from '@api/user.dto.api'

export async function api_user_update(body: dto_api_user.update['body']) {
  const { data, error } = await api.user.patch(body)
  if (error) throw error
  return data
}
