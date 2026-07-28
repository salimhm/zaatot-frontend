import { api } from '@api/index'
import type { dto_api_file } from '@api/file.dto.api'

export const image_public_url = import.meta.env.VITE_IMAGE_PUBLIC_URL

export async function api_file_find(query: dto_api_file.find['query']) {
  const default_query = {
    ...query,
    columns: (query as any).columns ?? ['user_id', 'created_at', 'file_id', 'file_name'],
  }
  const { data, error } = await api.file.get({ query: default_query as any })
  if (error) throw error
  return data
}

export async function api_file_create(body: dto_api_file.create['body'], onProgress?: (progress: number) => void) {
  const { file, file_name, tenant_id } = body

  const { data: upload_data, error } = await api.file.post({
    tenant_id,
    file_name: file_name || file.name,
    file_type: file.type,
    file_size: file.size,
  })
  if (error) throw error

  return new Promise<any>((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('PUT', upload_data.upload_url)
    xhr.setRequestHeader('content-type', file.type)

    if (onProgress) {
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percent = Math.round((event.loaded / event.total) * 100)
          onProgress(percent)
        }
      }
    }

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(upload_data)
      } else {
        reject(new Error(`Upload failed with status ${xhr.status}`))
      }
    }

    xhr.onerror = () => reject(new Error('Network error during upload'))
    xhr.send(file)
  })
}

export async function api_file_update(body: dto_api_file.update['body']) {
  const { data, error } = await api.file.patch(body)
  if (error) throw error
  return data
}

export async function api_file_delete(body: dto_api_file.remove['body']) {
  const { data, error } = await api.file.delete(body)
  if (error) throw error
  return data
}
