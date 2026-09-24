import { Text, Box } from '@mantine/core'
import type { dto_chat_message_user } from '@chat/message-user.dto.chat'

export default function ChatMessageUser(
  { message_content }: dto_chat_message_user['in'],
): dto_chat_message_user['out'] {
  return (
    <div className="flex justify-end px-[0.25rem]">
      <Box
        className="bg-[#10b981] text-white px-[1rem] py-[0.75rem] max-w-[80%] animate-[fade-in_150ms_ease-out]"
        style={{ borderRadius: '1rem 1rem 0.25rem 1rem' }}
      >
        <Text fz="0.9375rem" className="leading-relaxed whitespace-pre-wrap">
          {message_content}
        </Text>
      </Box>
    </div>
  )
}
