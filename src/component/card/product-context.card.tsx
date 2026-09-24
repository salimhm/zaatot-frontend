import { Group, Text, Image, Stack } from '@mantine/core'
import { PackageIcon } from '@phosphor-icons/react'
import type { dto_card_product_context } from '@card/product-context.dto.card'

export default function CardProductContext(
  { product_name, product_brand, product_category, product_image }: dto_card_product_context['in'],
): dto_card_product_context['out'] {
  return (
    <div className="border border-solid border-[rgba(0,0,0,0.08)] rounded-[0.75rem] bg-white px-[0.875rem] py-[0.75rem]">
      <Group gap="sm" wrap="nowrap" align="flex-start">
        {product_image ? (
          <Image
            src={product_image}
            alt={product_name}
            className="!w-[2.75rem] !h-[2.75rem] rounded-[0.375rem] object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-[2.75rem] h-[2.75rem] rounded-[0.375rem] bg-[#ecfdf5] flex items-center justify-center flex-shrink-0">
            <PackageIcon size="1.25rem" className="text-[#10b981]" weight="duotone" />
          </div>
        )}

        <Stack gap={2} className="flex-1 min-w-0">
          <Text fw={600} fz="0.875rem" className="text-black truncate">
            {product_name}
          </Text>
          {(product_brand || product_category) && (
            <Text fz="0.75rem" c="dimmed" className="truncate">
              {[product_brand, product_category].filter(Boolean).join(' · ')}
            </Text>
          )}
          <Text fz="0.6875rem" c="dimmed" className="mt-[0.125rem]">
            Product attached to this conversation
          </Text>
        </Stack>
      </Group>
    </div>
  )
}
