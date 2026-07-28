import { Card, Group, Stack, Text, Badge, Image } from '@mantine/core'
import { ClockIcon } from '@phosphor-icons/react'
import type { dto_card_product } from '@card/product.dto.card'

export default function CardProduct({
  product_name,
  product_barcode,
  created_at,
  product_images,
  status,
}: dto_card_product['in']): dto_card_product['out'] {
  const default_image = '/logo-64.png'
  const display_image = (product_images && product_images[0]) || default_image
  const display_date = created_at ? new Date(created_at).toLocaleDateString() : ''

  return (
    <Card
      radius="1rem"
      padding="md"
      className="border border-solid border-gray-100 hover:border-gray-200 transition-colors shadow-sm bg-white"
    >
      <Group gap="md" align="center" wrap="nowrap">
        <Image
          src={display_image}
          alt={product_name || 'Product'}
          h="4.5rem"
          w="4.5rem"
          radius="0.5rem"
          fit="cover"
          className="bg-gray-50 border border-solid border-gray-100"
        />

        <Stack gap="0.125rem" className="flex-1 min-w-0">
          <Group justify="space-between" align="flex-start" wrap="nowrap">
            <Text fw={700} size="md" className="truncate text-gray-800">
              {product_name || 'Unrecognized Product'}
            </Text>

            <Badge
              color={status === 'success' ? 'emerald' : 'orange'}
              variant="light"
              radius="md"
              styles={{
                root: {
                  color: status === 'success' ? '#10b981' : '#f59e0b',
                  backgroundColor: status === 'success' ? 'rgba(16,185,129,0.08)' : 'rgba(245,158,11,0.08)',
                },
              }}
            >
              {status === 'success' ? 'Found' : 'Not Found'}
            </Badge>
          </Group>

          <Group gap="0.25rem" className="text-gray-400">
            <ClockIcon size="0.875rem" />
            <Text size="xs" className="font-medium">
              {display_date}
            </Text>
          </Group>

          <Text
            size="xs"
            c="dimmed"
            className="font-mono bg-gray-50 border border-solid border-gray-100 rounded px-[0.375rem] py-[0.125rem] w-fit mt-[0.25rem]"
          >
            {product_barcode}
          </Text>
        </Stack>
      </Group>
    </Card>
  )
}
