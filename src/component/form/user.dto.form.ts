import type { dto_api_user } from '@api/user.dto.api'

export namespace dto_form_user {
  export interface props {
    initial_values?: dto_api_user.update['body']
    onSuccess?: () => void
  }
}
