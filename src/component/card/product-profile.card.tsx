import { useState } from 'react'
import { Stack, Text, Group, Badge, Button, Card, Center, List, Image } from '@mantine/core'
import { ShieldCheckIcon, ShieldWarningIcon } from '@phosphor-icons/react'
import { Carousel } from '@mantine/carousel'
import type { dto_card_product_profile } from '@card/product-profile.dto.card'
import ModalImagePreview from '@modal/image-preview.modal'
import CardBrandBoycottStatus from '@card/brand-boycott-status.card'

const nutriscore_colors = {
  A: '#038141',
  B: '#85bb2f',
  C: '#fecb02',
  D: '#ee8100',
  E: '#e63e11',
}

const ecoscore_colors = {
  A: '#00825a',
  B: '#10b981',
  C: '#ffc832',
  D: '#ff9100',
  E: '#ef4444',
}

const nutriscore_desc = {
  A: 'Excellent nutritional quality',
  B: 'Good nutritional quality',
  C: 'Moderate nutritional quality',
  D: 'Poor nutritional quality',
  E: 'Very poor nutritional quality',
}

const ecoscore_desc = {
  A: 'Very low environmental impact',
  B: 'Low environmental impact',
  C: 'Moderate environmental impact',
  D: 'High environmental impact',
  E: 'Very high environmental impact',
}

const nova_group_desc = {
  1: 'Minimally processed foods (fresh fruit, grains, milk)',
  2: 'Processed culinary ingredients (butter, oils, salt, sugar)',
  3: 'Processed foods (canned vegetables, simple baked breads)',
  4: 'Ultra-processed food & drink (highly industrial formulations)',
}

function GradeScale({
  selected,
  colors,
}: {
  selected: 'A' | 'B' | 'C' | 'D' | 'E' | 'a' | 'b' | 'c' | 'd' | 'e'
  colors: Record<'A' | 'B' | 'C' | 'D' | 'E', string>
}) {
  const norm_selected = selected.toUpperCase() as 'A' | 'B' | 'C' | 'D' | 'E'
  const grades: ('A' | 'B' | 'C' | 'D' | 'E')[] = ['A', 'B', 'C', 'D', 'E']

  return (
    <div className="w-full bg-gray-100/50 p-[0.5rem] rounded-full border border-solid border-gray-100/80 flex items-center justify-around">
      {grades.map((grade) => {
        const is_selected = grade === norm_selected
        const is_black_text = ['C'].includes(grade)
        return (
          <Center
            key={grade}
            className={`transition-all duration-200 rounded-full font-extrabold ${is_selected ? 'scale-115' : ''}`}
            styles={{
              root: {
                width: is_selected ? '2.5rem' : '2.1rem',
                height: is_selected ? '2.5rem' : '2.1rem',
                backgroundColor: colors[grade],
                opacity: is_selected ? 1 : 0.25,
                color: is_black_text ? '#000' : '#fff',
                fontSize: is_selected ? '1.2rem' : '0.9rem',
              },
            }}
          >
            {grade}
          </Center>
        )
      })}
    </div>
  )
}

export default function CardProductProfile({
  product_name,
  product_type,
  brand_name,
  brand_is_boycotted,
  brand_boycott_reasons,
  brand_boycott_alternatives,
  product_ecoscore,
  product_nova_group,
  product_nutriscore,
  product_metadata,
  product_images,
  on_add_to_whitelist,
  on_add_to_blacklist,
  on_remove_from_whitelist,
  on_remove_from_blacklist,
  is_loading_whitelist,
  is_loading_blacklist,
  is_loading_remove_whitelist,
  is_loading_remove_blacklist,
  is_whitelisted,
  is_blacklisted,
}: dto_card_product_profile['in']): dto_card_product_profile['out'] {
  const [$active_image, $_active_image] = useState<string | null>(null)

  return (
    <Stack gap="md" className="w-full">
      {product_images && product_images.length > 0 && (
        <Carousel
          withIndicators
          emblaOptions={{ loop: true, align: 'start' }}
          height="15rem"
          slideSize="100%"
          className="w-full bg-black rounded-[1rem] border border-solid border-gray-100 overflow-hidden"
        >
          {product_images.map((src, index) => (
            <Carousel.Slide key={index}>
              <Image
                src={src}
                alt={`${product_name || 'Product'} image ${index + 1}`}
                fit="contain"
                h="15rem"
                w="100%"
                className="cursor-pointer transition-opacity hover:opacity-90"
                onClick={() => $_active_image(src)}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      )}

      <Stack gap="0.25rem">
        <Text fw={800} size="xl" className="text-gray-900 leading-tight">
          {product_name || 'Unrecognized Product'}
        </Text>
        <Text size="xs" c="dimmed" fw={700} className="uppercase tracking-wider">
          {brand_name ? `${brand_name} • ` : ''}({product_type})
        </Text>
      </Stack>

      {brand_name && (
        <CardBrandBoycottStatus
          brand_is_boycotted={brand_is_boycotted}
          brand_boycott_reasons={brand_boycott_reasons}
          brand_boycott_alternatives={brand_boycott_alternatives}
        />
      )}

      <Stack gap="sm">
        {product_nutriscore && (
          <Card radius="md" padding="md" className="border border-solid border-gray-100 bg-gray-50/50">
            <Stack gap="sm">
              <Stack gap="0.125rem" className="w-full">
                <Text size="xs" fw={700} c="dimmed" className="uppercase tracking-wider">
                  Nutrition Score
                </Text>
                <Text size="sm" fw={600} className="text-gray-700">
                  {nutriscore_desc[product_nutriscore.toUpperCase() as keyof typeof nutriscore_desc] ||
                    'No description available'}
                </Text>
              </Stack>
              <GradeScale selected={product_nutriscore} colors={nutriscore_colors} />
            </Stack>
          </Card>
        )}

        {product_ecoscore && (
          <Card radius="md" padding="md" className="border border-solid border-gray-100 bg-gray-50/50">
            <Stack gap="sm">
              <Stack gap="0.125rem" className="w-full">
                <Text size="xs" fw={700} c="dimmed" className="uppercase tracking-wider">
                  Environmental Score
                </Text>
                <Text size="sm" fw={600} className="text-gray-700">
                  {ecoscore_desc[product_ecoscore.toUpperCase() as keyof typeof ecoscore_desc] ||
                    'No description available'}
                </Text>
              </Stack>
              <GradeScale selected={product_ecoscore} colors={ecoscore_colors} />
            </Stack>
          </Card>
        )}

        {product_nova_group && (
          <Card radius="md" padding="md" className="border border-solid border-gray-100 bg-gray-50/50">
            <Group justify="space-between" align="center" wrap="nowrap">
              <Stack gap="0.125rem" className="flex-1 pr-2">
                <Text size="xs" fw={700} c="dimmed" className="uppercase tracking-wider">
                  Food Processing Level (Nova Group)
                </Text>
                <Text size="sm" fw={600} className="text-gray-700 leading-snug">
                  {nova_group_desc[product_nova_group as keyof typeof nova_group_desc] || 'No description available'}
                </Text>
              </Stack>
              <Badge
                size="lg"
                radius="xl"
                styles={{
                  root: {
                    backgroundColor: '#f59e0b',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    height: '2.25rem',
                    width: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  },
                }}
              >
                {product_nova_group}
              </Badge>
            </Group>
          </Card>
        )}
      </Stack>

      <Stack gap="0.25rem">
        <Text fw={700} size="sm" className="text-gray-800">
          Allergens
        </Text>
        {!product_metadata?.allergens || product_metadata.allergens.length === 0 ? (
          <Text size="sm" c="dimmed" className="font-medium">
            No allergens declared.
          </Text>
        ) : (
          <Group gap="xs" wrap="wrap">
            {product_metadata.allergens.map((allergen) => (
              <Badge
                key={allergen}
                color="red"
                variant="light"
                radius="md"
                styles={{
                  root: {
                    color: '#ef4444',
                    backgroundColor: 'rgba(239,68,68,0.08)',
                    fontWeight: 600,
                  },
                }}
              >
                {allergen}
              </Badge>
            ))}
          </Group>
        )}
      </Stack>

      <Stack gap="0.25rem">
        <Text fw={700} size="sm" className="text-gray-800">
          Ingredients
        </Text>
        {product_metadata?.ingredients && product_metadata.ingredients.length > 0 ? (
          <List
            spacing="0.25rem"
            size="sm"
            className="bg-gray-50/50 p-[1rem] rounded-[0.75rem] border border-solid border-gray-100 text-gray-600 list-disc list-inside"
          >
            {product_metadata.ingredients.map((ingredient, index) => (
              <List.Item key={index} className="font-medium">
                {ingredient}
              </List.Item>
            ))}
          </List>
        ) : (
          <Text size="sm" c="dimmed" className="font-medium">
            No ingredients listed.
          </Text>
        )}
      </Stack>

      {(on_add_to_whitelist || on_add_to_blacklist || on_remove_from_whitelist || on_remove_from_blacklist) && (
        <Group gap="sm" mt="sm" className="w-full">
          {is_whitelisted && (
            <Button
              leftSection={<ShieldCheckIcon size="1.25rem" />}
              onClick={on_remove_from_whitelist}
              loading={is_loading_remove_whitelist}
              radius="md"
              size="md"
              variant="outline"
              color="red"
              className="w-full !border-red-500 !text-red-500 hover:!bg-red-50/30 font-semibold"
            >
              Remove Whitelist
            </Button>
          )}

          {is_blacklisted && (
            <Button
              leftSection={<ShieldWarningIcon size="1.25rem" />}
              onClick={on_remove_from_blacklist}
              loading={is_loading_remove_blacklist}
              radius="md"
              size="md"
              variant="outline"
              color="red"
              className="w-full !border-red-500 !text-red-500 hover:!bg-red-50/30 font-semibold"
            >
              Remove Blacklist
            </Button>
          )}

          {!is_whitelisted && !is_blacklisted && (
            <>
              <Button
                leftSection={<ShieldCheckIcon size="1.25rem" />}
                onClick={on_add_to_whitelist}
                loading={is_loading_whitelist}
                radius="md"
                size="md"
                className="flex-1 !bg-[#10b981] text-white hover:!bg-emerald-600 font-semibold"
              >
                Whitelist
              </Button>

              <Button
                leftSection={<ShieldWarningIcon size="1.25rem" />}
                onClick={on_add_to_blacklist}
                loading={is_loading_blacklist}
                radius="md"
                size="md"
                className="flex-1 !bg-[#ef4444] text-white hover:!bg-red-600 font-semibold"
              >
                Blacklist
              </Button>
            </>
          )}
        </Group>
      )}

      <ModalImagePreview
        opened={!!$active_image}
        on_close={() => $_active_image(null)}
        src={$active_image || ''}
        alt={product_name || 'Product'}
      />
    </Stack>
  )
}
