import { Group, Text, UnstyledButton, Image } from '@mantine/core'
import { useNavigate } from '@tanstack/react-router'
import { CaretLeftIcon, DotsThreeVerticalIcon } from '@phosphor-icons/react'
import type { dto_chat_header } from '@chat/header.dto.chat'

export default function ChatHeader(
  {}: dto_chat_header['in'],
): dto_chat_header['out'] {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-50 bg-[#fafafa]/90 backdrop-blur-md border-b border-solid border-[rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between px-[1rem] h-[4rem]">
        <UnstyledButton
          onClick={() => navigate({ to: '/' })}
          className="flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full transition-opacity duration-150 active:opacity-60"
          aria-label="Go back"
        >
          <CaretLeftIcon size="1.25rem" weight="bold" className="text-[#10b981]" />
        </UnstyledButton>

        <div className="flex flex-col items-center gap-[0.0625rem]">
          <Group gap={6} align="center">
            <Image
              src="/logo-32.png"
              alt="zaatot"
              className="!w-[1.25rem] !h-[1.25rem]"
            />
            <Text fw={700} fz="1rem" className="text-black tracking-tight">
              ZAATOT
            </Text>
          </Group>
          <Text fz="0.6875rem" c="dimmed" className="tracking-tight">
            AI Decision Companion
          </Text>
        </div>

        <UnstyledButton
          className="flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full transition-opacity duration-150 active:opacity-60"
          aria-label="Chat options"
        >
          <DotsThreeVerticalIcon size="1.25rem" weight="bold" className="text-gray-500" />
        </UnstyledButton>
      </div>
    </header>
  )
}
