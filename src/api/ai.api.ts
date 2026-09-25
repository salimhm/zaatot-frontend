import { backend_url } from '@api/index'
import type { dto_api_ai } from '@api/ai.dto.api'

export async function api_ai_analyze(
  _query: dto_api_ai['analyze']['query'],
  body: dto_api_ai['analyze']['body'],
): Promise<dto_api_ai['analyze']['response']> {
  const token = localStorage.getItem('token')

  const response = await fetch(`${backend_url}/ai/analyze`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'text/event-stream',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      'ngrok-skip-browser-warning': 'true',
    },
    body: JSON.stringify(body),
  })

  if (response.status === 401) {
    localStorage.clear()
    window.location.href = '/auth/sign-in'
    throw new Error('Unauthorized')
  }

  const refresh_token = response.headers.get('x-refresh-token')
  if (refresh_token) {
    localStorage.setItem('token', refresh_token)
  }

  if (!response.ok) {
    const error_body = await response.text().catch(() => '')
    throw new Error(error_body || `Request failed with status ${response.status}`)
  }

  return response
}
