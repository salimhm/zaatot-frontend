import { useState, useEffect } from 'react'
import { Stack, Text, Center, Loader, Button, Alert } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { notifications } from '@mantine/notifications'
import CardProduct from '@card/product.card'
import { api_scan_history_find } from '@api/scan-history.api'
import { error_get_message } from '@lib/error.lib'

export default function ViewUserHistory() {
  const navigate = useNavigate()
  const [$page, $_page] = useState(1)
  const [$pages_data, $_pages_data] = useState<Record<number, any[]>>({})
  const [$has_more, $_has_more] = useState(true)

  const {
    data: $history_data,
    isFetching: $is_fetching,
    error,
  } = useQuery({
    queryKey: ['scan-history', $page],
    queryFn: () => api_scan_history_find({ order_by: ['-scanned_at'], page: $page, take: 3 }),
    retry: false,
  })

  useEffect(() => {
    if ($history_data?.data) {
      const new_items = $history_data.data
      $_pages_data((prev) => ({
        ...prev,
        [$page]: new_items,
      }))
      if (new_items.length < 3) {
        $_has_more(false)
      }
    }
  }, [$history_data, $page])

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

  const is_not_found_error = (err: any) => {
    if (!err) return false
    const msg = error_get_message(err).toLowerCase()
    if (msg.includes('not found') || msg.includes('not-found')) return true
    if (
      typeof err === 'string' &&
      (err.toLowerCase().includes('not-found') || err.toLowerCase().includes('not found'))
    ) {
      return true
    }
    if (err && typeof err === 'object') {
      const val = err.value
      if (
        typeof val === 'string' &&
        (val.toLowerCase().includes('not-found') || val.toLowerCase().includes('not found'))
      ) {
        return true
      }
      if (val && typeof val === 'object') {
        const code = val.code || val.error || val.message || val.summary
        if (
          typeof code === 'string' &&
          (code.toLowerCase().includes('not-found') || code.toLowerCase().includes('not found'))
        ) {
          return true
        }
      }
    }
    return false
  }

  const seen_ids = new Set()
  const history_items = Object.keys($pages_data)
    .map(Number)
    .sort((a, b) => a - b)
    .flatMap((pageNum) => $pages_data[pageNum] || [])
    .filter((item) => {
      if (seen_ids.has(item.scan_history_id)) {
        return false
      }
      seen_ids.add(item.scan_history_id)
      return true
    })

  const $show_initial_loader = $is_fetching && $page === 1 && Object.keys($pages_data).length === 0

  const handle_item_click = (item: any) => {
    if (item.product?.product_id) {
      navigate({ to: '/product/$product_id', params: { product_id: String(item.product.product_id) } })
    } else {
      notifications.show({
        title: 'Product Unrecognized',
        message: 'No details are available for this barcode yet.',
        color: 'orange',
      })
    }
  }

  return (
    <Center className="w-full flex flex-col py-[2rem]">
      <Stack gap="xl" className="max-w-[28rem] w-full">
        <Stack gap="xs" className="text-center">
          <Text fw={800} fz="2rem" className="tracking-tight text-black leading-tight">
            Scan History
          </Text>
          <Text size="sm" c="dimmed" className="font-medium">
            Review your previously scanned products and barcodes.
          </Text>
        </Stack>

        <Stack gap="sm">
          {error && !is_not_found_error(error) && (
            <Alert color="red" radius="md">
              {error_get_message(error)}
            </Alert>
          )}
          {$show_initial_loader ? (
            <Center className="py-[3rem]">
              <Loader color="green" size="lg" />
            </Center>
          ) : history_items.length === 0 ? (
            <Center className="py-[3rem]">
              <Text size="sm" c="dimmed" fw={500}>
                No scans recorded yet.
              </Text>
            </Center>
          ) : (
            <>
              {history_items.map((item) => (
                <div key={item.scan_history_id} onClick={() => handle_item_click(item)} className="cursor-pointer">
                  <CardProduct
                    product_name={item.product?.product_name}
                    product_barcode={item.product_barcode || ''}
                    created_at={item.scanned_at}
                    product_images={item.product?.product_images}
                    status={item.product ? 'success' : 'unknown'}
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
