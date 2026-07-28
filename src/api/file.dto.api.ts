import { type_enum_combination_type } from '@lib/enum.lib'

export namespace dto_api_file {
  export interface find {
    query: {
      combination_type?: type_enum_combination_type
      page?: number
      take?: number
      order_by?: string[]
      group_by?: ('user_id' | 'created_at' | 'file_id' | 'file_name')[]
      count?: 'false' | 'true'
      file_id?: string[]
      file_name?: string[]
      tenant_id: number
      columns: ('user_id' | 'created_at' | 'file_id' | 'file_name')[]
    }
    response: { data: any; page: number; take: number; rows: number | null; pages: number | null }
  }
  export interface create {
    body: { file: File; file_name?: string; tenant_id: number }
    response: { data: any }
  }
  export interface update {
    body: { file_id: string; file_name?: string; tenant_id: number }
    response: { data: any }
  }
  export interface remove {
    body: { file_id: string; tenant_id: number }
    response: { data: any }
  }
}
