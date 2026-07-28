import { Box, TextInput, Button, Stack, Group, Avatar, FileButton, Text, Center, Progress } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { notifications } from '@mantine/notifications'
import { api_user_update } from '@api/user.api'
import { api_file_create, image_public_url } from '@api/file.api'
import type { dto_form_user } from '@form/user.dto.form'
import { useState } from 'react'
import { store_set_user } from '@store/user.store'
import { error_get_message } from '@lib/error.lib'

export default function FormUser({ initial_values, onSuccess }: dto_form_user.props) {
  const qc = useQueryClient()
  const [$uploading, $_uploading] = useState(false)
  const [$progress, $_progress] = useState<number | null>(null)
  const [$preview_url, $_preview_url] = useState<string | null>(null)
  const [$user_image, $_user_image] = useState<string | null>(
    initial_values?.user_image ?? localStorage.getItem('user_image') ?? null,
  )

  const form = useForm({
    initialValues: {
      user_first_name: initial_values?.user_first_name ?? localStorage.getItem('user_first_name') ?? '',
      user_last_name: initial_values?.user_last_name ?? localStorage.getItem('user_last_name') ?? '',
      user_phone: initial_values?.user_phone ?? localStorage.getItem('user_phone') ?? '',
    },
    validate: {
      user_first_name: (val) => (val && val.length > 0 ? null : 'First name is required'),
      user_last_name: (val) => (val && val.length > 0 ? null : 'Last name is required'),
      user_phone: (val) => (val && val.length >= 8 ? null : 'Invalid phone number'),
    },
  })

  const mutation = useMutation({
    mutationFn: (values: typeof form.values) =>
      api_user_update({
        ...values,
        user_image: $user_image ?? undefined,
      }),
    onSuccess: (_, variables) => {
      if (variables.user_first_name) localStorage.setItem('user_first_name', variables.user_first_name)
      if (variables.user_last_name) localStorage.setItem('user_last_name', variables.user_last_name)
      if (variables.user_phone) localStorage.setItem('user_phone', variables.user_phone)
      if ($user_image) localStorage.setItem('user_image', $user_image)

      store_set_user({
        user_first_name: variables.user_first_name || localStorage.getItem('user_first_name'),
        user_last_name: variables.user_last_name || localStorage.getItem('user_last_name'),
        user_phone: variables.user_phone || localStorage.getItem('user_phone'),
        user_image: $user_image || localStorage.getItem('user_image'),
      })

      qc.invalidateQueries({ queryKey: ['user'] })
      notifications.show({
        title: 'Success',
        message: 'Profile updated successfully.',
        color: 'green',
      })
      onSuccess?.()
    },
    onError: (err) => {
      notifications.show({
        title: 'Update Failed',
        message: error_get_message(err),
        color: 'red',
      })
    },
  })

  async function handle_file_change(file: File | null) {
    if (!file) return
    const local_url = URL.createObjectURL(file)
    $_preview_url(local_url)
    $_uploading(true)
    $_progress(0)
    try {
      const upload_res = await api_file_create(
        {
          file,
          file_name: file.name,
          tenant_id: Number(localStorage.getItem('user_id')),
        },
        (pct) => {
          $_progress(pct)
        },
      )
      if (upload_res?.data?.file_id) {
        const file_id = upload_res.data.file_id
        $_user_image(file_id)

        await api_user_update({
          user_image: file_id,
        })
        localStorage.setItem('user_image', file_id)
        store_set_user({
          user_image: file_id,
        })
        qc.invalidateQueries({ queryKey: ['user'] })
      }
    } catch (err: any) {
      console.error('Upload error:', JSON.stringify(err?.value ?? err, null, 2))
      notifications.show({
        title: 'Upload Failed',
        message: error_get_message(err),
        color: 'red',
      })
      $_preview_url(null)
    } finally {
      $_uploading(false)
      $_progress(null)
    }
  }

  const avatar_url = $preview_url || ($user_image ? `${image_public_url}/${$user_image}` : undefined)

  return (
    <Box component="form" onSubmit={form.onSubmit((values) => mutation.mutate(values))}>
      <Stack gap="lg">
        <Center className="flex flex-col gap-2">
          <Avatar
            size="7.5rem"
            radius="100%"
            src={avatar_url}
            alt="Profile Avatar"
            className="border border-solid border-[rgba(0,0,0,0.08)] bg-gray-50"
          />
          <FileButton onChange={handle_file_change} accept="image/*">
            {(props) => (
              <Button
                {...props}
                variant="subtle"
                size="xs"
                className="text-[#10b981] hover:bg-emerald-50/50 font-semibold"
                loading={$uploading}
              >
                Change Profile Photo
              </Button>
            )}
          </FileButton>

          {$progress !== null && (
            <Stack gap="0.25rem" align="center" className="w-[12rem] mx-auto">
              <Progress value={$progress} size="xs" color="green" animated className="w-full" />
              <Text size="xs" c="dimmed">
                Uploading... {$progress}%
              </Text>
            </Stack>
          )}
        </Center>

        <Group grow>
          <TextInput
            label="First Name"
            placeholder="John"
            size="lg"
            radius="md"
            classNames={{
              label: '!mx-2 !text-sm',
            }}
            {...form.getInputProps('user_first_name')}
          />
          <TextInput
            label="Last Name"
            placeholder="Doe"
            size="lg"
            radius="md"
            classNames={{
              label: '!mx-2 !text-sm',
            }}
            {...form.getInputProps('user_last_name')}
          />
        </Group>

        <TextInput
          label="Phone Number"
          placeholder="+212 600 000 000"
          size="lg"
          radius="md"
          classNames={{
            label: '!mx-2 !text-sm',
          }}
          {...form.getInputProps('user_phone')}
        />

        <Button
          type="submit"
          size="lg"
          radius="xl"
          loading={mutation.isPending}
          className="bg-[#10b981] font-semibold"
          styles={{
            root: {
              backgroundColor: '#10b981',
            },
          }}
        >
          Update Profile
        </Button>
      </Stack>
    </Box>
  )
}
