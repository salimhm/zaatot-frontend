import { Group, Text, Image } from '@mantine/core'
import type { dto_chat_investigating } from '@chat/investigating.dto.chat'

export default function ChatInvestigating(
  {}: dto_chat_investigating['in'],
): dto_chat_investigating['out'] {
  return (
    <div className="flex justify-start px-[0.25rem] animate-[fade-in_150ms_ease-out]">
      <div className="max-w-[90%]">
        <Group gap={8} align="center">
          <Image
            src="/logo-32.png"
            alt="zaatot"
            className="!w-[1.25rem] !h-[1.25rem]"
          />
          <Text fw={700} fz="0.8125rem" className="text-[#10b981]">
            ZAATOT
          </Text>
        </Group>

        <Group gap={6} align="center" className="mt-[0.5rem] pl-[0.125rem]">
          <Text fz="0.875rem" c="dimmed" className="font-medium">
            Investigating
          </Text>
          <span className="flex gap-[0.1875rem] items-center">
            <span className="w-[0.3125rem] h-[0.3125rem] rounded-full bg-[#10b981] animate-[dot-pulse_1.4s_ease-in-out_infinite]" />
            <span className="w-[0.3125rem] h-[0.3125rem] rounded-full bg-[#10b981] animate-[dot-pulse_1.4s_ease-in-out_0.2s_infinite]" />
            <span className="w-[0.3125rem] h-[0.3125rem] rounded-full bg-[#10b981] animate-[dot-pulse_1.4s_ease-in-out_0.4s_infinite]" />
          </span>
        </Group>
      </div>
    </div>
  )
}
