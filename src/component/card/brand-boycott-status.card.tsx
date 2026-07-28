import { Stack, Group, Card, Text, List } from '@mantine/core'
import { ShieldCheckIcon, ShieldWarningIcon } from '@phosphor-icons/react'
import type { dto_card_brand_boycott_status } from '@card/brand-boycott-status.dto.card'

export default function CardBrandBoycottStatus({
  brand_is_boycotted,
  brand_boycott_reasons,
  brand_boycott_alternatives,
}: dto_card_brand_boycott_status['in']): dto_card_brand_boycott_status['out'] {
  return (
    <Stack gap="md" className="w-full">
      {brand_is_boycotted && (
        <Card radius="md" padding="md" className="!border-0 !bg-transparent !shadow-none !px-0">
          <Stack gap="md">
            <Group gap="xs" align="center">
              <ShieldWarningIcon size="2rem" className="text-[#ef4444] flex-shrink-0" />
              <Text fw={800} size="md" className="text-red-800 leading-tight">
                Boycotted Brand
              </Text>
            </Group>

            <Stack gap="xs" className="w-full">
              {brand_boycott_reasons && brand_boycott_reasons.length > 0 && (
                <Stack gap="4px">
                  <Text size="xs" fw={700} className="text-red-700 uppercase tracking-wider">
                    Reasons:
                  </Text>
                  <List size="lg" className="text-red-800 list-disc list-inside">
                    {brand_boycott_reasons.map((reason, index) => (
                      <List.Item key={index} className="font-medium">
                        {reason}
                      </List.Item>
                    ))}
                  </List>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Card>
      )}

      {brand_is_boycotted && brand_boycott_alternatives && brand_boycott_alternatives.length > 0 && (
        <Stack gap="xs" className="w-full">
          <Text size="sm" fw={800} className="text-[#10b981] uppercase tracking-wider">
            Recommended Alternatives
          </Text>
          <ul className="list-disc list-inside text-emerald-700 font-bold text-xl pl-[0.5rem] space-y-[0.25rem]">
            {brand_boycott_alternatives.map((alt) => (
              <li key={alt}>{alt}</li>
            ))}
          </ul>
        </Stack>
      )}

      {!brand_is_boycotted && (
        <Card radius="md" padding="md" className="!border !border-solid !border-[#10b981] !bg-transparent !shadow-none">
          <Group gap="sm" wrap="nowrap" align="center">
            <ShieldCheckIcon size="2rem" className="text-[#10b981] flex-shrink-0" />
            <Stack gap="2px" className="flex-1">
              <Text fw={800} size="md" className="text-emerald-800 leading-tight">
                Safe Brand
              </Text>
              <Text size="xs" className="text-emerald-700 font-medium">
                This brand is verified and not on the boycott list.
              </Text>
            </Stack>
          </Group>
        </Card>
      )}
    </Stack>
  )
}
