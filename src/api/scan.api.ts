import { api } from '@api/index'
import type { dto_api_scan } from '@api/scan.dto.api'

export async function api_scan_barcode(body: dto_api_scan.barcode['body']) {
  const { data, error } = await api.scan.barcode.post(body)
  if (error) throw error
  return data
}

export async function api_scan_identify(body: dto_api_scan.identify['body']) {
  const { data, error } = await api.scan.identify.post(body)
  if (error) throw error
  return data
}
