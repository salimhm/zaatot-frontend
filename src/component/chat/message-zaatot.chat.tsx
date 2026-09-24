import { Stack, Group, Text, Image } from '@mantine/core'
import CardDecision from '@card/decision.card'
import ChatEvidence from '@chat/evidence.chat'
import type { dto_chat_message_zaatot } from '@chat/message-zaatot.dto.chat'

export default function ChatMessageZaatot(
  { message_content, decision, sources }: dto_chat_message_zaatot['in'],
): dto_chat_message_zaatot['out'] {
  return (
    <div className="flex justify-start px-[0.25rem] animate-[fade-in_150ms_ease-out]">
      <Stack gap="sm" className="max-w-[90%]">
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

        <Text fz="0.9375rem" className="leading-relaxed text-black whitespace-pre-wrap pl-[0.125rem]">
          {message_content}
        </Text>

        {decision && (
          <CardDecision
            decision_status={decision.decision_status}
            decision_summary={decision.decision_summary}
            decision_confidence={decision.decision_confidence}
            decision_confidence_label={decision.decision_confidence_label}
          />
        )}

        {sources && sources.length > 0 && (
          <ChatEvidence sources={sources} />
        )}
      </Stack>
    </div>
  )
}
