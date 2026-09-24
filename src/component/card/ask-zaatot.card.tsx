import { useState } from 'react'
import { Stack, Text, Group, Image, TextInput } from '@mantine/core'
import { useNavigate } from '@tanstack/react-router'
import { ArrowRightIcon } from '@phosphor-icons/react'
import type { dto_card_ask_zaatot } from '@card/ask-zaatot.dto.card'

export default function CardAskZaatot(
  { }: dto_card_ask_zaatot['in'],
): dto_card_ask_zaatot['out'] {
  const navigate = useNavigate()
  const [$input_value, $_input_value] = useState('')

  const handle_navigate = () => {
    const trimmed = $input_value.trim()
    navigate({
      to: '/chat',
      state: trimmed ? { initial_message: trimmed } : undefined,
    } as Parameters<typeof navigate>[0])
  }

  const handle_key_down = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handle_navigate()
    }
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

      <Group
        gap="sm"
        wrap="nowrap"
        align="center"
        className="w-full border border-solid border-[rgba(0,0,0,0.08)] rounded-[0.75rem] bg-[#fcfcfc] px-[0.75rem] py-[0.25rem] transition-all duration-200 focus-within:border-[#10b981] cursor-text"
        onClick={() => {
          const input = document.getElementById('home-ask-input')
          input?.focus()
        }}
      >
        <TextInput
          id="home-ask-input"
          value={$input_value}
          onChange={(e) => $_input_value(e.currentTarget.value)}
          onKeyDown={handle_key_down}
          placeholder="Ask ZAATOT anything..."
          aria-label="Ask ZAATOT anything"
          className="flex-1"
          // variant="unstyled"
          styles={{
            input: {
              border: 'none',
              padding: 0,
              backgroundColor: 'transparent',
              fontSize: '0.875rem',
              height: '2.5rem',
              outline: 'none',
              boxShadow: 'none',
            },
          }}
        />
        <button
          onClick={(e) => {
            e.stopPropagation()
            handle_navigate()
          }}
          className="flex items-center justify-center w-[2rem] h-[2rem] rounded-full bg-transparent border-none cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-95"
          aria-label="Go to chat"
          type="button"
        >
          <ArrowRightIcon
            size="1.125rem"
            className="text-[#10b981]"
            weight="bold"
          />
        </button>
      </Group>
    </Stack>
  )
}
