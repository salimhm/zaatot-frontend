import { type_enum_otp_action } from '@lib/enum.lib'

export namespace dto_form_otp_send {
  export interface props {
    otp_action: type_enum_otp_action
    is_new_user?: boolean
    onSuccess: (phone: string, first_name?: string, last_name?: string) => void
  }
}
