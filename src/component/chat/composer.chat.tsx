import { useRef, useCallback } from 'react'
import { Group, Textarea, UnstyledButton } from '@mantine/core'
import { PaperPlaneRightIcon } from '@phosphor-icons/react'
import type { dto_chat_composer } from '@chat/composer.dto.chat'

export default function ChatComposer(
  { input_value, on_input_change, on_send, is_sending }: dto_chat_composer['in'],
): dto_chat_composer['out'] {
  const textarea_ref = useRef<HTMLTextAreaElement>(null)
  const can_send = input_value.trim().length > 0 && !is_sending

  const handle_key_down = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        if (can_send) on_send()
      }
    },
    [can_send, on_send],
  )

  return (
    <div className="z-40 px-[1rem] pb-[0.5rem] pt-[0.5rem] bg-[#fafafa]/90 backdrop-blur-md border-t border-solid border-[rgba(0,0,0,0.06)]">
      <Group
        gap="sm"
        wrap="nowrap"
        className="items-center justify-center text-center w-full bg-white border border-solid border-[rgba(0,0,0,0.08)] rounded-full px-[0.875rem] py-[0.5rem] transition-all duration-200 focus-within:border-[#10b981]"
      >
        <Textarea
          ref={textarea_ref}
          value={input_value}
          onChange={(e) => on_input_change(e.currentTarget.value)}
          onKeyDown={handle_key_down}
          placeholder="Ask ZAATOT anything..."
          aria-label="Chat message input"
          autosize
          minRows={1}
          maxRows={4}
          className="flex-1"
          styles={{
            input: {
              border: 'none',
              padding: 0,
              minHeight: '1.5rem',
              backgroundColor: 'transparent',
              fontSize: '0.9375rem',
            },
          }}
        />

        <UnstyledButton
          onClick={on_send}
          disabled={!can_send}
          aria-label="Send message"
          className={`flex items-center justify-center w-[2.25rem] h-[2.25rem] rounded-full transition-all duration-150 active:scale-95 ${
            can_send
              ? 'bg-[#10b981] text-white'
              : 'bg-gray-100 text-gray-400'
          }`}
        >
          <PaperPlaneRightIcon size="1.125rem" weight="fill" />
        </UnstyledButton>
      </Group>
    </div>
  )
}
