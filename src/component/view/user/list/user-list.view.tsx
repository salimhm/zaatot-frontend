import { Stack, Text, Center, SegmentedControl, Loader, Alert } from '@mantine/core'
import { useNavigate } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import CardProduct from '@card/product.card'
import { api_user_list_find } from '@api/user-list.api'
import { error_get_message } from '@lib/error.lib'
import { ShieldCheckIcon, ShieldWarningIcon } from '@phosphor-icons/react'

interface ViewUserListProps {
  type: 'whitelist' | 'blacklist'
}

export default function ViewUserList({ type }: ViewUserListProps) {
  const navigate = useNavigate()

  const {
    data: $user_list_data,
    isLoading: $is_loading,
    error,
  } = useQuery({
    queryKey: ['user-list', type],
    queryFn: () => api_user_list_find({ user_list_type: [type] }),
  })

  const items = $user_list_data?.data ?? []

  const handle_item_click = (item: any) => {
    if (item.product?.product_id) {
      navigate({ to: '/product/$product_id', params: { product_id: String(item.product.product_id) } })
    }
  }

  return (
    <Center className="min-h-[70vh] w-full flex flex-col py-[2rem]">
      <Stack gap="xl" className="max-w-[28rem] w-full">
        <Stack gap="xs" className="text-center">
          <Text fw={800} fz="2rem" className="tracking-tight text-black leading-tight">
            Rules Manager
          </Text>
          <Text size="sm" c="dimmed" className="font-medium">
            Whitelist or blacklist product barcodes to filter scanning alerts.
          </Text>
        </Stack>

        <SegmentedControl
          value={type}
          onChange={(val) => {
            if (val === 'whitelist') {
              navigate({ to: '/user/list/white' })
            } else {
              navigate({ to: '/user/list/black' })
            }
          }}
          data={[
            { label: 'Whitelist', value: 'whitelist' },
            { label: 'Blacklist', value: 'blacklist' },
          ]}
          color={type === 'whitelist' ? 'emerald' : 'red'}
          radius="xl"
          size="md"
          className="w-full"
          styles={{
            root: {
              backgroundColor: 'rgba(0,0,0,0.03)',
            },
            indicator: {
              backgroundColor: type === 'whitelist' ? '#10b981' : '#ef4444',
            },
            label: {
              fontWeight: 700,
            },
          }}
        />

        <Stack gap="sm">
          {error && (
            <Alert color="red" radius="md">
              {error_get_message(error)}
            </Alert>
          )}
          {$is_loading ? (
            <Center className="py-[3rem]">
              <Loader color={type === 'whitelist' ? 'emerald' : 'red'} size="lg" />
            </Center>
          ) : items.length === 0 ? (
            <Stack gap="xs" align="center" className="py-[3rem] w-full">
              {type === 'whitelist' ? (
                <ShieldCheckIcon size="3rem" className="text-[#10b981]" />
              ) : (
                <ShieldWarningIcon size="3rem" className="text-[#ef4444]" />
              )}
              <Text size="sm" c="dimmed" fw={600}>
                {type === 'whitelist' ? 'No whitelisted products yet.' : 'No blacklisted products yet.'}
              </Text>
            </Stack>
          ) : (
            items.map((item) => (
              <div key={item.user_list_id} onClick={() => handle_item_click(item)} className="cursor-pointer">
                <CardProduct
                  product_name={item.product?.product_name}
                  product_barcode={item.product?.product_barcode || ''}
                  created_at={item.created_at}
                  product_images={item.product?.product_images}
                  status="success"
                />
              </div>
            ))
          )}
        </Stack>
      </Stack>
    </Center>
  )
}
