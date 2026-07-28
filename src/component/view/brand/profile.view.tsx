import { useParams } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Stack, Text, Center, Loader, Alert, Card, Group, Badge, List, Button } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import CardProduct from '@card/product.card'
import CardBrandBoycottStatus from '@card/brand-boycott-status.card'
import { api_brand_find } from '@api/brand.api'
import { api_product_find } from '@api/product.api'
import { error_get_message } from '@lib/error.lib'

export default function ViewBrandProfile() {
  const { brand_id } = useParams({ strict: false }) as { brand_id: string }
  const navigate = useNavigate()

  const [$product_page, $_product_page] = useState(1)
  const [$product_pages_data, $_product_pages_data] = useState<Record<number, any[]>>({})
  const [$has_more_products, $_has_more_products] = useState(true)

  // Fetch Brand Info
  const {
    data: $brand_response,
    isFetching: $is_fetching_brand,
    error: brand_error,
  } = useQuery({
    queryKey: ['brand-detail', brand_id],
    queryFn: () =>
      api_brand_find({
        brand_id: [Number(brand_id)],
        columns: [
          'brand_id',
          'brand_name',
          'brand_is_boycotted',
          'brand_boycott_reasons',
          'brand_boycott_alternatives',
          'created_at',
        ],
      }),
    enabled: !!brand_id,
    retry: false,
  })

  // Fetch Brand Products
  const {
    data: $products_response,
    isFetching: $is_fetching_products,
    error: products_error,
  } = useQuery({
    queryKey: ['brand-products', brand_id, $product_page],
    queryFn: () =>
      api_product_find({
        brand_id: [Number(brand_id)],
        page: $product_page,
        take: 3,
        order_by: ['-product_id'],
        columns: ['product_id', 'product_name', 'product_barcode', 'product_images', 'created_at'],
      }),
    enabled: !!brand_id,
    retry: false,
  })

  useEffect(() => {
    if ($products_response?.data) {
      const new_items = $products_response.data
      $_product_pages_data((prev) => ({
        ...prev,
        [$product_page]: new_items,
      }))
      if (new_items.length < 3) {
        $_has_more_products(false)
      }
    }
  }, [$products_response, $product_page])

  useEffect(() => {
    if (products_error) {
      $_has_more_products(false)
    }
  }, [products_error])

  const handle_load_more_products = () => {
    if (!$is_fetching_products && $has_more_products) {
      $_product_page((p) => p + 1)
    }
  }

  const brand = $brand_response?.data?.[0]
  const $show_loader = $is_fetching_brand && !brand

  const seen_ids = new Set()
  const product_items = Object.keys($product_pages_data)
    .map(Number)
    .sort((a, b) => a - b)
    .flatMap((pageNum) => $product_pages_data[pageNum] || [])
    .filter((item) => {
      if (seen_ids.has(item.product_id)) {
        return false
      }
      seen_ids.add(item.product_id)
      return true
    })

  return (
    <Center className="w-full flex flex-col pb-[2rem]">
      <Stack gap="xl" className="max-w-[28rem] w-full">
        {brand_error && (
          <Alert color="red" radius="md">
            {error_get_message(brand_error)}
          </Alert>
        )}

        {$show_loader ? (
          <Center className="py-[5rem]">
            <Loader color="green" size="lg" />
          </Center>
        ) : !brand ? (
          <Center className="py-[5rem]">
            <Text size="md" c="dimmed" fw={600}>
              Brand not found.
            </Text>
          </Center>
        ) : (
          <Stack gap="md" className="w-full">
            <Stack gap="0.25rem">
              <Text fw={800} size="xl" className="text-gray-900 leading-tight">
                {brand.brand_name}
              </Text>
              <Text size="xs" c="dimmed" fw={700} className="uppercase tracking-wider">
                Brand Profile
              </Text>
            </Stack>

            <CardBrandBoycottStatus
              brand_is_boycotted={brand.brand_is_boycotted}
              brand_boycott_reasons={brand.brand_boycott_reasons}
              brand_boycott_alternatives={brand.brand_boycott_alternatives}
            />

            <Stack gap="sm" mt="md">
              <Text fw={800} size="lg" className="text-gray-900">
                Products under this brand
              </Text>

              {products_error && (
                <Alert color="red" radius="md">
                  {error_get_message(products_error)}
                </Alert>
              )}

              {product_items.length === 0 && !$is_fetching_products ? (
                <Text size="sm" c="dimmed" className="font-medium">
                  No products registered under this brand.
                </Text>
              ) : (
                <Stack gap="sm">
                  {product_items.map((item) => (
                    <div
                      key={item.product_id}
                      onClick={() =>
                        navigate({ to: '/product/$product_id', params: { product_id: String(item.product_id) } })
                      }
                      className="cursor-pointer"
                    >
                      <CardProduct
                        product_name={item.product_name}
                        product_barcode={item.product_barcode || ''}
                        created_at={item.created_at}
                        product_images={item.product_images}
                        status="success"
                      />
                    </div>
                  ))}

                  {/* Manual pagination */}
                  {$has_more_products && (
                    <Button
                      variant="light"
                      onClick={handle_load_more_products}
                      loading={$is_fetching_products}
                      radius="md"
                      className="mt-[0.5rem] w-full !text-[#10b981] !bg-[rgba(16,185,129,0.08)] hover:!bg-[rgba(16,185,129,0.12)]"
                    >
                      Load More Products
                    </Button>
                  )}
                </Stack>
              )}
            </Stack>
          </Stack>
        )}
      </Stack>
    </Center>
  )
}
