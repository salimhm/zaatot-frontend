import { Group, Text, UnstyledButton } from '@mantine/core'
import { ArrowRightIcon } from '@phosphor-icons/react'
import type { dto_card_suggestion } from '@card/suggestion.dto.card'

export default function CardSuggestion(
  { suggestion_text, suggestion_icon, on_click }: dto_card_suggestion['in'],
): dto_card_suggestion['out'] {
  return (
    <UnstyledButton
      onClick={() => on_click(suggestion_text)}
      className="w-full border border-solid border-[rgba(0,0,0,0.08)] rounded-[0.75rem] bg-white px-[1rem] py-[0.875rem] transition-all duration-200 hover:border-[#10b981] active:scale-[0.98]"
      aria-label={suggestion_text}
    >
      <Group justify="space-between" align="center" wrap="nowrap">
        <Group gap={10} align="center" wrap="nowrap" className="flex-1 min-w-0">
          {suggestion_icon && (
            <span className="flex-shrink-0">{suggestion_icon}</span>
          )}
          <Text fz="0.875rem" fw={500} className="text-black truncate">
            {suggestion_text}
          </Text>
        </Group>
        <ArrowRightIcon
          size="0.875rem"
          className="text-gray-400 flex-shrink-0"
          weight="bold"
        />
      </Group>
    </UnstyledButton>
  )
}
