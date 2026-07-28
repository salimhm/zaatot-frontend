import { type_enum_otp_action } from '@lib/enum.lib'

export namespace dto_api_auth {
  export interface otp_send {
    body: { user_phone: string; otp_action: type_enum_otp_action }
    response: { success: boolean }
  }
  export interface otp_verify {
    body: {
      user_phone: string
      otp_code: string
      user_first_name?: string
      user_last_name?: string
    }
    response: { data: any; token: string }
  }
}
