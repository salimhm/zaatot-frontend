import { useState } from 'react'
import { Box, Button, Stack, Alert, Text, PinInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useMutation } from '@tanstack/react-query'
import { notifications } from '@mantine/notifications'
import { api_auth_otp_verify } from '@api/auth.api'
import { error_get_message } from '@lib/error.lib'
import type { dto_form_otp_verify } from '@form/otp-verify.dto.form'

export default function FormOtpVerify({
  user_phone,
  user_first_name,
  user_last_name,
  onSuccess,
}: dto_form_otp_verify.props) {
  const [$error, $_error] = useState('')

  const form = useForm({
    initialValues: { otp_code: '' },
    validate: {
      otp_code: (v: string) => (v.length !== 4 ? 'Enter the 4-digit code' : null),
    },
  })

  const mutation = useMutation({
    mutationFn: (values: typeof form.values) =>
      api_auth_otp_verify({
        user_phone,
        otp_code: values.otp_code,
        user_first_name,
        user_last_name,
      }),
    onSuccess: (data) => {
      $_error('')
      notifications.show({
        title: 'Success',
        message: 'Verification successful.',
        color: 'green',
      })
      onSuccess(data?.token ?? '', data?.data)
    },
    onError: (err) => {
      const msg = error_get_message(err)
      $_error(msg)
      notifications.show({
        title: 'Verification Failed',
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
        <Stack gap="0.25rem">
          <Text fw={600} size="sm">
            Enter the 4-digit code
          </Text>
          <PinInput
            id="verify-otp-pin"
            length={4}
            type="number"
            size="xl"
            radius="md"
            onComplete={(v) => form.setFieldValue('otp_code', v)}
            onChange={(v) => form.setFieldValue('otp_code', v)}
            styles={{
              root: { justifyContent: 'space-between' },
            }}
          />
          {form.errors.otp_code && (
            <Text c="red" size="xs">
              {form.errors.otp_code}
            </Text>
          )}
        </Stack>
        <Button
          id="verify-submit"
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
          {user_first_name ? 'Create Account' : 'Verify & Sign In'}
        </Button>
      </Stack>
    </Box>
  )
}
