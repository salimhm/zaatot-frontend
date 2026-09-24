import { Group, Text, UnstyledButton } from '@mantine/core'
import { FileTextIcon } from '@phosphor-icons/react'
import type { dto_chat_evidence } from '@chat/evidence.dto.chat'

export default function ChatEvidence(
  { sources }: dto_chat_evidence['in'],
): dto_chat_evidence['out'] {
  return (
    <div className="border border-solid border-[rgba(0,0,0,0.08)] rounded-[0.75rem] px-[0.875rem] py-[0.75rem] bg-white">
      <Group justify="space-between" align="center">
        <Group gap={8} align="center">
          <FileTextIcon size="1rem" weight="duotone" className="text-[#10b981]" />
          <div>
            <Text fw={600} fz="0.8125rem" className="text-black">
              Sources
            </Text>
            <Text fz="0.75rem" c="dimmed">
              {sources.length} {sources.length === 1 ? 'reference' : 'references'} used
            </Text>
          </div>
        </Group>

        <UnstyledButton
          className="text-[#10b981] text-[0.8125rem] font-semibold transition-opacity duration-150 active:opacity-60"
          aria-label="View evidence"
        >
          View
        </UnstyledButton>
      </Group>
    </div>
  )
}
