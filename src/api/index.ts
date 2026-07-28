import { treaty } from '@elysiajs/eden'
import type { App } from '@src/eden'

export const backend_url = import.meta.env.VITE_BACKEND_URL

export const api = treaty<App>(backend_url, {
  headers: () => ({
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'ngrok-skip-browser-warning': 'true',
  }),
  onResponse: (response) => {
    if (response.status === 401) {
      localStorage.clear()
      window.location.href = '/auth/sign-in'
      return
    }
    const refresh_token = response.headers.get('x-refresh-token')
    if (refresh_token) {
      localStorage.setItem('token', refresh_token)
    }
  },
})
