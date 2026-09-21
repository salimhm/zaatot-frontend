import { Stack, Text, Image, Button, Group } from '@mantine/core'
import { useNavigate } from '@tanstack/react-router'
import { useSelector } from '@tanstack/react-store'
import { store_user } from '@store/user.store'
import { BarcodeIcon } from '@phosphor-icons/react'
import CardAskZaatot from '@card/ask-zaatot.card'

export default function ViewIndex() {
  const navigate = useNavigate()
  const user_first_name = useSelector(store_user, (state) => state.user_first_name)
  const display_name = user_first_name ? user_first_name.charAt(0).toUpperCase() + user_first_name.slice(1) : 'Buddy'

  return (
    <Stack gap="xl" align="center" className="w-full max-w-[28rem] mx-auto text-center pt-[2rem]">
      <Image
        src="/logo-128.png"
        alt="zaatot"
        className="!w-auto transition-transform duration-300 hover:scale-105"
      />

      <Stack gap="xs">
        <Text fw={800} fz="2.25rem" className="tracking-tight text-black leading-tight">
          Hello, {display_name}!
        </Text>
        <Text size="md" c="dimmed" className="leading-relaxed font-medium">
          Quickly scan product barcodes
        </Text>
      </Stack>

      <Stack gap="lg" className="w-full" mt="md">
        <Button
          radius="1.25rem"
          size="xl"
          fw={700}
          leftSection={<BarcodeIcon size={32} />}
          onClick={() => navigate({ to: '/scan' })}
          className="bg-[#10b981] !font-bold !uppercase"
          styles={{
            root: {
              backgroundColor: '#10b981',
            },
          }}
        >
          Start Scanning
        </Button>

        <Group gap="sm" grow>
          <Button
            variant="light"
            radius="1.25rem"
            size="xl"
            fw={700}
            onClick={() => navigate({ to: '/brand' })}
            className="text-[#10b981] border-[#10b981] hover:bg-emerald-50/30"
          >
            Brands
          </Button>
          <Button
            variant="light"
            radius="1.25rem"
            size="xl"
            fw={700}
            onClick={() => navigate({ to: '/product' })}
            className="text-[#10b981] border-[#10b981] hover:bg-emerald-50/30"
          >
            Products
          </Button>
        </Group>
      </Stack>

      <div className="w-full text-left mt-[0.5rem]">
        <CardAskZaatot />
      </div>
    </Stack>
  )
}
