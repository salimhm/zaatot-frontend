import { useState } from 'react'
import { Stack, Text, Avatar, Button, Center, Modal, Group } from '@mantine/core'
import { useNavigate } from '@tanstack/react-router'
import { useSelector } from '@tanstack/react-store'
import { store_user } from '@store/user.store'
import { image_public_url } from '@api/file.api'
import { ShieldCheckIcon, ShieldWarningIcon, SignOutIcon, StorefrontIcon, BasketIcon } from '@phosphor-icons/react'

export default function ViewUserProfile() {
  const navigate = useNavigate()
  const [$confirm_logout_open, $_confirm_logout_open] = useState(false)
  const user_first_name = useSelector(store_user, (state) => state.user_first_name)
  const user_last_name = useSelector(store_user, (state) => state.user_last_name)
  const user_phone = useSelector(store_user, (state) => state.user_phone)
  const user_image = useSelector(store_user, (state) => state.user_image)

  const avatar_url = user_image ? `${image_public_url}/${user_image}` : '/logo-128.png'
  const full_name = [user_first_name, user_last_name].filter(Boolean).join(' ') || 'User Profile'

  function handle_logout() {
    localStorage.clear()
    window.location.href = '/auth/sign-in'
  }

  return (
    <Center className="min-h-[70vh] w-full flex flex-col px-[1rem] py-[2rem]">
      <Stack gap="xl" align="center" className="max-w-[28rem] w-full">
        <Stack gap="xl" align="center" className="w-full">
          <Stack gap="xs" align="center" className="w-full">
            <Avatar
              radius="100%"
              size="6rem"
              src={avatar_url}
              className="border-2 border-solid border-[#10b981] bg-gray-50"
            />

            <Stack gap="xs" align="center" className="w-full text-center">
              <Text fw={800} size="xl" className="text-gray-800">
                {full_name}
              </Text>
              {user_phone && (
                <Text size="sm" c="dimmed" className="font-mono">
                  {user_phone}
                </Text>
              )}
            </Stack>

            <Button
              variant="outline"
              radius="1.25rem"
              size="md"
              fw={700}
              onClick={() => navigate({ to: '/user/profile-update' })}
              className="text-[#10b981] hover:bg-emerald-50/50"
            >
              Update Profile
            </Button>
          </Stack>

          <Stack gap="sm" className="w-full mt-8">
            <Group gap="sm" grow w="100%">
              <Button
                leftSection={<ShieldCheckIcon size="1.25rem" />}
                radius="1.25rem"
                size="md"
                fw={700}
                onClick={() => navigate({ to: '/user/list/white' })}
                className="flex-1 !bg-[#10b981] text-white hover:!bg-emerald-600"
              >
                Whitelist
              </Button>

              <Button
                leftSection={<ShieldWarningIcon size="1.25rem" />}
                radius="1.25rem"
                size="md"
                fw={700}
                onClick={() => navigate({ to: '/user/list/black' })}
                className="flex-1 !bg-[#ef4444] text-white hover:!bg-red-600"
              >
                Blacklist
              </Button>
            </Group>

            <Group gap="sm" grow w="100%">
              <Button
                variant="outline"
                leftSection={<BasketIcon size="1.25rem" />}
                radius="1.25rem"
                size="md"
                fw={700}
                onClick={() => navigate({ to: '/product' })}
                className="flex-1 text-[#10b981] border-[#10b981] hover:bg-emerald-50/30"
              >
                Products
              </Button>

              <Button
                variant="outline"
                leftSection={<StorefrontIcon size="1.25rem" />}
                radius="1.25rem"
                size="md"
                fw={700}
                onClick={() => navigate({ to: '/brand' })}
                className="flex-1 text-[#10b981] border-[#10b981] hover:bg-emerald-50/30"
              >
                Brands
              </Button>
            </Group>

            <Button
              variant="subtle"
              color="red"
              leftSection={<SignOutIcon size="1.25rem" />}
              radius="1.25rem"
              size="md"
              fullWidth
              fw={700}
              mt={58}
              onClick={() => $_confirm_logout_open(true)}
              className="text-red-500 hover:bg-red-50/50"
            >
              Sign Out
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Modal
        opened={$confirm_logout_open}
        onClose={() => $_confirm_logout_open(false)}
        title="Confirm Sign Out"
        centered
        radius="1rem"
        size="sm"
        styles={{
          header: {
            borderBottom: '0.0625rem solid rgba(0,0,0,0.05)',
            paddingBottom: '0.5rem',
            marginBottom: '0.5rem',
          },
          title: {
            fontWeight: 800,
            fontSize: '1.1rem',
            color: '#111',
          },
        }}
      >
        <Stack gap="md" className="py-2">
          <Text size="sm" className="text-gray-600 font-medium">
            Are you sure you want to sign out of your account?
          </Text>
          <Group gap="sm" grow>
            <Button variant="default" radius="md" onClick={() => $_confirm_logout_open(false)}>
              Cancel
            </Button>
            <Button color="red" radius="md" onClick={handle_logout}>
              Confirm
            </Button>
          </Group>
        </Stack>
      </Modal>
    </Center>
  )
}
