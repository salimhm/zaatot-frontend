import { useState } from 'react'
import { Button, FileButton, Group, Text, Loader, Stack } from '@mantine/core'
import { useMutation } from '@tanstack/react-query'
import { notifications } from '@mantine/notifications'
import { api_file_create } from '@api/file.api'
import { error_get_message } from '@lib/error.lib'
import { enum_file_image_type, enum_file_video_type, enum_file_audio_type } from '@lib/enum.lib'
import type { dto_form_file } from '@form/file.dto.form'

const allowed_type_list = [...enum_file_image_type, ...enum_file_video_type, ...enum_file_audio_type]

export default function FormFile({ onSuccess, label, accept, multiple }: dto_form_file.props) {
  const [$error, $_error] = useState('')

  const mutation = useMutation({
    mutationFn: async (file: File) => {
      if (!allowed_type_list.includes(file.type as any)) {
        throw new Error(`File type "${file.type}" is not supported by our system.`)
      }

      return await api_file_create({
        file,
        file_name: file.name,
        tenant_id: 1,
      })
    },
    onSuccess: (res: any) => {
      $_error('')
      if (res.data) {
        notifications.show({
          title: 'Success',
          message: 'File uploaded successfully.',
          color: 'green',
        })
        onSuccess({ file_id: res.data.file_id, file_name: res.data.file_name })
      }
    },
    onError: (err: any) => {
      const msg = error_get_message(err)
      $_error(msg)
      notifications.show({
        title: 'Upload Failed',
        message: msg,
        color: 'red',
      })
    },
  })

  const handle_change = (file_input: File | File[] | null) => {
    if (!file_input) return
    $_error('')

    if (Array.isArray(file_input)) {
      file_input.forEach((f) => mutation.mutate(f))
    } else {
      mutation.mutate(file_input)
    }
  }

  return (
    <Stack gap="xs">
      <Group justify="center">
        <FileButton onChange={handle_change} accept={accept || [...enum_file_image_type].join(',')} multiple={multiple}>
          {(props) => (
            <Button {...props} variant="light" color="green" radius="xl" loading={mutation.isPending}>
              {label || 'Upload Image'}
            </Button>
          )}
        </FileButton>
      </Group>

      {mutation.isPending && (
        <Group justify="center" gap="xs">
          <Loader size="xs" color="green" />
          <Text size="xs" c="dimmed">
            Uploading...
          </Text>
        </Group>
      )}

      {$error && (
        <Text size="xs" color="red" ta="center">
          {$error}
        </Text>
      )}
    </Stack>
  )
}
