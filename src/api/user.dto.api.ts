export namespace dto_api_user {
  export interface update {
    body: {
      user_phone?: string
      user_first_name?: string
      user_last_name?: string
      user_image?: string
    }
    response: { data: any }
  }
}
