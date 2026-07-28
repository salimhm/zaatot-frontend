export namespace dto_form_otp_verify {
  export interface props {
    user_phone: string
    user_first_name?: string
    user_last_name?: string
    onSuccess: (token: string, user_data: any) => void
  }
}
