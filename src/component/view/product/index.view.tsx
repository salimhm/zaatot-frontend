import { useState, useEffect } from 'react'
import { Stack, Text, Center, Loader, Button, Alert, TextInput, ActionIcon, Group } from '@mantine/core'
import { XIcon } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import CardProduct from '@card/product.card'
import { api_product_find } from '@api/product.api'
import { error_get_message } from '@lib/error.lib'

export default function ViewProductIndex() {
  const navigate = useNavigate()
  const [$search_input, $_search_input] = useState('')
  const [$search_query, $_search_query] = useState('')
  const [$page, $_page] = useState(1)
  const [$pages_data, $_pages_data] = useState<Record<number, any[]>>({})
  const [$has_more, $_has_more] = useState(true)

  const {
    data: $products_data,
    isFetching: $is_fetching,
    error,
  } = useQuery({
    queryKey: ['product-list', $page, $search_query],
    queryFn: () =>
      api_product_find({
        page: $page,
        take: 3,
        product_name: $search_query ? [$search_query] : undefined,
        order_by: ['-product_id'],
        columns: ['product_id', 'product_name', 'product_barcode', 'product_images', 'created_at'],
      }),
    retry: false,
  })

  useEffect(() => {
    $_page(1)
    $_pages_data({})
    $_has_more(true)
  }, [$search_query])

  useEffect(() => {
    if ($products_data?.data) {
      const new_items = $products_data.data
      $_pages_data((prev) => ({
        ...prev,
        [$page]: new_items,
      }))
      if (new_items.length < 3) {
        $_has_more(false)
      }
    }
  }, [$products_data, $page])

  useEffect(() => {
    if (error) {
      $_has_more(false)
    }
  }, [error])

  const handle_load_more = () => {
    if (!$is_fetching && $has_more) {
      $_page((p) => p + 1)
    }
  }

  const handle_search = () => {
    $_search_query($search_input.trim())
  }

  const handle_clear = () => {
    $_search_input('')
    $_search_query('')
  }

  const seen_ids = new Set()
  const product_items = Object.keys($pages_data)
    .map(Number)
    .sort((a, b) => a - b)
    .flatMap((pageNum) => $pages_data[pageNum] || [])
    .filter((item) => {
      if (seen_ids.has(item.product_id)) {
        return false
      }
      seen_ids.add(item.product_id)
      return true
    })

  const $show_initial_loader = $is_fetching && $page === 1 && Object.keys($pages_data).length === 0

  return (
    <Center className="w-full flex flex-col pb-[2rem]">
      <Stack gap="xl" className="max-w-[28rem] w-full">
        <Stack gap="xs" className="text-center">
          <Text fw={800} fz="2rem" className="tracking-tight text-black leading-tight">
            Products Directory
          </Text>
          <Text size="sm" c="dimmed" className="font-medium">
            Browse and search our catalog of products.
          </Text>
        </Stack>

        <Group gap="xs" wrap="nowrap" align="center" className="w-full">
          <TextInput
            placeholder="Search by product name..."
            value={$search_input}
            onChange={(e) => $_search_input(e.currentTarget.value)}
            onKeyDown={(e) => e.key === 'Enter' && handle_search()}
            radius="1.25rem"
            size="md"
            className="flex-1"
            rightSection={
              $search_input && (
                <ActionIcon size="1.75rem" radius="xl" variant="subtle" color="gray" onClick={handle_clear}>
                  <XIcon size="1.1rem" />
                </ActionIcon>
              )
            }
          />
          <Button
            radius="1.25rem"
            size="md"
            onClick={handle_search}
            className="!bg-[#10b981]"
            styles={{
              root: {
                backgroundColor: '#10b981',
              },
            }}
          >
            Search
          </Button>
        </Group>

        <Stack gap="sm">
          {error && (
            <Alert color="red" radius="md">
              {error_get_message(error)}
            </Alert>
          )}

          {$show_initial_loader ? (
            <Center className="py-[3rem]">
              <Loader color="green" size="lg" />
            </Center>
          ) : product_items.length === 0 ? (
            <Center className="py-[3rem]">
              <Text size="sm" c="dimmed" fw={500}>
                No products found.
              </Text>
            </Center>
          ) : (
            <>
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

              {$has_more && (
                <Button
                  variant="light"
                  onClick={handle_load_more}
                  loading={$is_fetching}
                  radius="md"
                  className="mt-[0.5rem] w-full !text-[#10b981] !bg-[rgba(16,185,129,0.08)] hover:!bg-[rgba(16,185,129,0.12)]"
                >
                  Load More
                </Button>
              )}
            </>
          )}
        </Stack>
      </Stack>
    </Center>
  )
}
