import { api } from '@api/index'
import type { dto_api_ai } from '@api/ai.dto.api'

export async function api_ai_analyze(
  query: dto_api_ai['analyze']['query'],
  body: dto_api_ai['analyze']['body'],
): Promise<dto_api_ai['analyze']['response']> {
  // Using 'as any' in case the eden.d.ts types are not yet synced with this new endpoint
  const response = await (api as any).ai.analyze.post(body)

  if (response.error) {
    throw new Error(response.error.value?.message || 'Failed to analyze')
  }

  return response as dto_api_ai['analyze']['response']
}
