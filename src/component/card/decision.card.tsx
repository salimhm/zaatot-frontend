import { Stack, Group, Text, Box } from '@mantine/core'
import { ShieldCheckIcon } from '@phosphor-icons/react'
import type { dto_card_decision } from '@card/decision.dto.card'
import type { type_decision_status } from '@store/chat.store'

const status_labels: Record<type_decision_status, string> = {
  good_fit: 'Good fit',
  worth_considering: 'Worth considering',
  potential_concern: 'Potential concern',
  compare_first: 'Compare first',
  not_enough_information: 'Not enough information',
}

const status_colors: Record<type_decision_status, { bg: string; text: string }> = {
  good_fit: { bg: '#ecfdf5', text: '#065f46' },
  worth_considering: { bg: '#ecfdf5', text: '#065f46' },
  potential_concern: { bg: '#fef9ee', text: '#78590a' },
  compare_first: { bg: '#f0f9ff', text: '#0c4a6e' },
  not_enough_information: { bg: '#f5f5f5', text: '#525252' },
}

export default function CardDecision(
  { decision_status, decision_summary, decision_confidence, decision_confidence_label }: dto_card_decision['in'],
): dto_card_decision['out'] {
  const colors = status_colors[decision_status]
  const max_dots = 5
  const filled_dots = decision_confidence ?? 0

  return (
    <Box className="border border-solid border-[rgba(0,0,0,0.08)] rounded-[0.875rem] bg-white overflow-hidden">
      <div className="px-[1rem] pt-[0.875rem] pb-[0.125rem]">
        <Group gap={6} align="center">
          <ShieldCheckIcon size="0.875rem" weight="duotone" className="text-[#10b981]" />
          <Text fw={700} fz="0.6875rem" className="uppercase tracking-wider text-gray-500">
            ZAATOT's Take
          </Text>
        </Group>
      </div>

      <Stack gap="sm" className="px-[1rem] pb-[1rem] pt-[0.5rem]">
        <span
          className="inline-flex self-start px-[0.625rem] py-[0.1875rem] rounded-full text-[0.75rem] font-semibold"
          style={{ backgroundColor: colors.bg, color: colors.text }}
        >
          {status_labels[decision_status]}
        </span>

        <Text fz="0.875rem" className="text-black leading-relaxed">
          {decision_summary}
        </Text>

        {decision_confidence !== undefined && (
          <Group gap={6} align="center">
            <span className="flex gap-[0.1875rem]">
              {Array.from({ length: max_dots }).map((_, i) => (
                <span
                  key={i}
                  className={`w-[0.4375rem] h-[0.4375rem] rounded-full ${
                    i < filled_dots ? 'bg-[#10b981]' : 'bg-gray-200'
                  }`}
                />
              ))}
            </span>
            {decision_confidence_label && (
              <Text fz="0.75rem" c="dimmed" fw={500}>
                {decision_confidence_label}
              </Text>
            )}
          </Group>
        )}
      </Stack>
    </Box>
  )
}
