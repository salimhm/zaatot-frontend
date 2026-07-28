import { useState } from 'react'
import { Box, Stack, Text, Paper, Group, Button, Image } from '@mantine/core'
import { useNavigate } from '@tanstack/react-router'
import { enum_otp_action } from '@lib/enum.lib'
import FormOtpSend from '@form/otp-send.form'
import FormOtpVerify from '@form/otp-verify.form'

export default function ViewSignUp() {
  const navigate = useNavigate()
  const [$step, $_step] = useState<'phone' | 'otp'>('phone')
  const [$phone, $_phone] = useState('')
  const [$first_name, $_first_name] = useState('')
  const [$last_name, $_last_name] = useState('')

  function handle_otp_sent() {
    $_step('otp')
  }

  function handle_verified(token: string, user_data: any) {
    if (token) localStorage.setItem('token', token)
    if (user_data) {
      localStorage.setItem('user_id', String(user_data.user_id || ''))
      localStorage.setItem('user_first_name', user_data.user_first_name || '')
      localStorage.setItem('user_last_name', user_data.user_last_name || '')
      localStorage.setItem('user_phone', user_data.user_phone || '')
      if (user_data.user_image) {
        localStorage.setItem('user_image', user_data.user_image)
      } else {
        localStorage.removeItem('user_image')
      }
    }

    window.location.href = '/'
  }

  return (
    <Box className="w-full max-w-[28rem]">
      <Paper p="xl" radius="md" className="!bg-transparent !shadow-none !border-0">
        <Stack gap="lg">
          <Stack gap="0.5rem" align="center">
            <Image src="/logo-128.png" alt="zaatot" w="auto" fit="contain" />
            <Text fw={700} size="xl" className="text-black">
              Create your account
            </Text>
            <Text c="dimmed" size="sm" ta="center">
              {$step === 'otp' && `We sent a 4-digit code to ${$phone}`}
            </Text>
          </Stack>

          {$step === 'phone' && (
            <FormOtpSend
              otp_action={enum_otp_action[1]}
              is_new_user={true}
              onSuccess={(phone, first_name, last_name) => {
                $_phone(phone)
                if (first_name) $_first_name(first_name)
                if (last_name) $_last_name(last_name)
                handle_otp_sent()
              }}
            />
          )}

          {$step === 'otp' && (
            <>
              <FormOtpVerify
                user_phone={$phone}
                user_first_name={$first_name}
                user_last_name={$last_name}
                onSuccess={handle_verified}
              />
              <Group justify="center">
                <Button variant="subtle" size="xs" className="text-[#10b981]" onClick={() => $_step('phone')}>
                  Change number
                </Button>
              </Group>
            </>
          )}

          <Group justify="center">
            <Text size="xl" ta="center">
              Already have an account?{' '}
              <Text
                component="span"
                fw={700}
                size="xl"
                c="green"
                className="cursor-pointer text-[1.25rem]"
                onClick={() => navigate({ to: '/auth/sign-in' })}
              >
                Sign In
              </Text>
            </Text>
          </Group>
        </Stack>
      </Paper>
    </Box>
  )
}
