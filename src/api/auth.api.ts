import { api } from '@api/index'
import { dto_api_auth } from '@api/auth.dto.api'

export async function api_auth_otp_send(
  body: dto_api_auth.otp_send['body'],
): Promise<dto_api_auth.otp_send['response']> {
  const { data, error } = await api.auth.otp.send.post(body)
  if (error) throw error
  return data
}

export async function api_auth_otp_verify(body: dto_api_auth.otp_verify['body']) {
  const { data, error } = await api.auth.otp.verify.post(body)
  if (error) throw error
  return data
}
