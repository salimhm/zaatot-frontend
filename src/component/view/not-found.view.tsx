import { Center, Text, Button, Stack, Image } from '@mantine/core'
import { useNavigate } from '@tanstack/react-router'

export default function ViewNotFound() {
  const navigate = useNavigate()

  return (
    <Center h="60vh">
      <Stack align="center" gap="md">
        <Image src="/404.png" alt="Page not found" h="13.75rem" w="auto" fit="contain" />
        <Text fw={700} size="xl" c="#000">
          Oops! Page not found
        </Text>
        <Text c="dimmed">This page doesn't exist... yet!</Text>
        <Button id="not-found-home-btn" onClick={() => navigate({ to: '/' })} color="green" radius="xl" size="md">
          🏠 Back to Home
        </Button>
      </Stack>
    </Center>
  )
}
