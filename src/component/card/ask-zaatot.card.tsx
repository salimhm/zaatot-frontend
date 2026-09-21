import { Stack, Text, Group, UnstyledButton, Image } from '@mantine/core'
import { useNavigate } from '@tanstack/react-router'
import { ArrowRightIcon } from '@phosphor-icons/react'
import type { dto_card_ask_zaatot } from '@card/ask-zaatot.dto.card'

export default function CardAskZaatot(
  {}: dto_card_ask_zaatot['in'],
): dto_card_ask_zaatot['out'] {
  const navigate = useNavigate()

  const handle_navigate = () => {
    navigate({ to: '/chat' })
  }

  return (
    <Stack gap="sm">
      <Group gap="xs" align="center">
        <Image
          src="/logo-32.png"
          alt="zaatot"
          className="!w-[1.375rem] !h-[1.375rem]"
        />
        <Text fw={700} fz="1.125rem" className="text-black">
          Ask ZAATOT
        </Text>
      </Group>

      <Text size="sm" c="dimmed" className="font-medium">
        Ask about a product, choice or decision.
      </Text>

      <UnstyledButton
        onClick={handle_navigate}
        className="w-full border border-solid border-[rgba(0,0,0,0.08)] rounded-[0.75rem] bg-[#fcfcfc] px-[1rem] py-[0.875rem] transition-all duration-200 hover:border-[#10b981] active:scale-[0.98]"
        aria-label="Ask ZAATOT anything"
      >
        <Group justify="space-between" align="center" wrap="nowrap">
          <Text size="sm" c="dimmed">
            Ask ZAATOT anything...
          </Text>
          <ArrowRightIcon
            size="1.125rem"
            className="text-[#10b981] transition-transform duration-200"
            weight="bold"
          />
        </Group>
      </UnstyledButton>
    </Stack>
  )
}
