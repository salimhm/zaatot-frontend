import { useState } from 'react'
import { Box, TextInput, Button, Stack, Alert, Group } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useMutation } from '@tanstack/react-query'
import { notifications } from '@mantine/notifications'
import { api_auth_otp_send } from '@api/auth.api'
import { error_get_message } from '@lib/error.lib'
import { enum_otp_action } from '@lib/enum.lib'
import type { dto_form_otp_send } from '@form/otp-send.dto.form'

export default function FormOtpSend({ otp_action, is_new_user = false, onSuccess }: dto_form_otp_send.props) {
  const [$error, $_error] = useState('')

  const form = useForm({
    initialValues: { user_phone: '', user_first_name: '', user_last_name: '' },
    validate: {
      user_phone: (v: string) => (v.length < 8 ? 'Enter a valid phone number' : null),
      user_first_name: (v: string) => (is_new_user && v.length < 2 ? 'First name is required' : null),
      user_last_name: (v: string) => (is_new_user && v.length < 2 ? 'Last name is required' : null),
    },
  })

  const mutation = useMutation({
    mutationFn: (values: typeof form.values) => api_auth_otp_send({ user_phone: values.user_phone, otp_action }),
    onSuccess: (_, variables) => {
      $_error('')
      notifications.show({
        title: 'OTP Sent',
        message: `Verification code sent to ${variables.user_phone}.`,
        color: 'green',
      })
      onSuccess(variables.user_phone, variables.user_first_name, variables.user_last_name)
    },
    onError: (err) => {
      const msg = error_get_message(err)
      $_error(msg)
      notifications.show({
        title: 'Error',
        message: msg,
        color: 'red',
      })
    },
  })

  return (
    <Box component="form" onSubmit={form.onSubmit((v) => mutation.mutate(v))}>
      <Stack gap="md">
        {$error && (
          <Alert color="red" radius="md">
            {$error}
          </Alert>
        )}
        {is_new_user && (
          <Group grow>
            <TextInput
              id="otp-send-first-name"
              label="First Name"
              placeholder="First"
              size="lg"
              radius="md"
              classNames={{
                label: '!mx-2 !text-sm',
              }}
              {...form.getInputProps('user_first_name')}
            />
            <TextInput
              id="otp-send-last-name"
              label="Last Name"
              placeholder="Last"
              size="lg"
              radius="md"
              classNames={{
                label: '!mx-2 !text-sm',
              }}
              {...form.getInputProps('user_last_name')}
            />
          </Group>
        )}
        <TextInput
          id="otp-send-phone"
          label="Phone Number"
          placeholder="+212 6XX XXX XXX"
          size="lg"
          radius="md"
          classNames={{
            label: '!mx-2 !text-sm',
          }}
          {...form.getInputProps('user_phone')}
        />
        <Button
          id="otp-send-submit"
          type="submit"
          fullWidth
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
          {otp_action === enum_otp_action[0] ? 'Sign In' : 'Sign Up'}
        </Button>
      </Stack>
    </Box>
  )
}
