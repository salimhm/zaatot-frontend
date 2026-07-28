import { Card, Group, Stack, Text, Badge } from '@mantine/core'
import { ShieldCheckIcon, ShieldWarningIcon } from '@phosphor-icons/react'
import type { dto_card_brand } from '@card/brand.dto.card'

export default function CardBrand({ brand_name, brand_is_boycotted }: dto_card_brand['in']): dto_card_brand['out'] {
  return (
    <Card
      radius="1rem"
      padding="md"
      className="border border-solid border-gray-100 hover:border-gray-200 transition-colors shadow-sm bg-white"
    >
      <Group gap="md" align="center" wrap="nowrap">
        {brand_is_boycotted ? (
          <div className="flex items-center justify-center h-[3rem] w-[3rem] rounded-[0.5rem] bg-red-50 text-red-600 border border-solid border-red-100">
            <ShieldWarningIcon size="1.75rem" />
          </div>
        ) : (
          <div className="flex items-center justify-center h-[3rem] w-[3rem] rounded-[0.5rem] bg-emerald-50 text-[#00c951] border border-solid border-emerald-100">
            <ShieldCheckIcon size="1.75rem" />
          </div>
        )}

        <Stack gap="0.125rem" className="flex-1 min-w-0">
          <Group justify="space-between" align="center" wrap="nowrap">
            <Text fw={700} size="md" className="truncate text-gray-800">
              {brand_name || 'Unrecognized Brand'}
            </Text>

            <Badge
              color={brand_is_boycotted ? 'red' : 'emerald'}
              variant="light"
              radius="md"
              styles={{
                root: {
                  color: brand_is_boycotted ? '#ef4444' : '#10b981',
                  backgroundColor: brand_is_boycotted ? 'rgba(239,68,68,0.08)' : 'rgba(16,185,129,0.08)',
                },
              }}
            >
              {brand_is_boycotted ? 'Boycotted' : 'Safe'}
            </Badge>
          </Group>
        </Stack>
      </Group>
    </Card>
  )
}
