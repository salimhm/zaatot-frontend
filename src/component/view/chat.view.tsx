import { Stack, Text, Image, Center } from '@mantine/core'

export default function ViewChat() {
  return (
    <Center className="min-h-[60vh] w-full">
      <Stack gap="md" align="center" className="text-center max-w-[20rem]">
        <Image
          src="/logo-128.png"
          alt="zaatot"
          className="!w-[4rem] !h-auto"
        />

        <Text fw={700} fz="1.5rem" className="text-black">
          Ask ZAATOT
        </Text>

        <Text size="sm" c="dimmed" className="font-medium leading-relaxed">
          Your AI decision companion is coming soon.
        </Text>
      </Stack>
    </Center>
  )
}
