import { api } from '@api/index'
import type { dto_api_scan_history } from '@api/scan-history.dto.api'

export async function api_scan_history_find(query: dto_api_scan_history.find['query']) {
  const default_query = {
    ...query,
    columns: query.columns ?? ['product_id', 'product_barcode', 'scan_history_id', 'scanned_at'],
  }
  const { data, error } = await api['scan-history'].get({ query: default_query as any })
  if (error) throw error
  return data
}
