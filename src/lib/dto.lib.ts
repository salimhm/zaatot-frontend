export interface dto_paginated_response<T = any> {
  data: T[]
  page: number
  take: number
  rows: number | null
  pages: number | null
}
