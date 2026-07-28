import { api } from '@api/index'
import type { dto_api_boycott_decision } from '@api/boycott-decision.dto.api'

export async function api_boycott_decision_decide(body: dto_api_boycott_decision.decide['body']) {
  const { data, error } = await api['boycott-decision'].decide.post(body)
  if (error) throw error
  return data
}
