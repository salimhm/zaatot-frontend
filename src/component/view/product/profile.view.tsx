import { useParams } from '@tanstack/react-router'
import { Stack, Text, Center, Loader, Alert } from '@mantine/core'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { notifications } from '@mantine/notifications'
import CardProductProfile from '@card/product-profile.card'
import { api_product_find } from '@api/product.api'
import { api_user_list_create, api_user_list_find, api_user_list_delete } from '@api/user-list.api'
import { error_get_message } from '@lib/error.lib'

export default function ViewProductProfile() {
  const { product_id } = useParams({ strict: false }) as { product_id: string }
  const query_client = useQueryClient()

  const {
    data: $product_response,
    isFetching: $is_fetching,
    error,
  } = useQuery({
    queryKey: ['product-profile', product_id],
    queryFn: () =>
      api_product_find({
        product_id: [Number(product_id)],
        columns: [
          'product_id',
          'product_barcode',
          'product_type',
          'product_name',
          'brand_id',
          'product_images',
          'product_nova_group',
          'product_ecoscore',
          'product_nutriscore',
          'product_metadata',
          'updated_at',
          'brand_name',
          'brand_is_boycotted',
          'brand_boycott_reasons',
          'brand_boycott_alternatives',
        ],
      }),
    enabled: !!product_id,
    retry: false,
  })

  // Query whitelist/blacklist status for this product
  const { data: $user_list_response } = useQuery({
    queryKey: ['product-user-list', product_id],
    queryFn: () => api_user_list_find({ product_id: [Number(product_id)] }),
    enabled: !!product_id,
  })

  const user_list_items = $user_list_response?.data || []
  const is_whitelisted = user_list_items.some((item: any) => item.user_list_type === 'whitelist')
  const is_blacklisted = user_list_items.some((item: any) => item.user_list_type === 'blacklist')

  const mutation_add_to_list = useMutation({
    mutationFn: (variables: { product_id: number; type: 'whitelist' | 'blacklist' }) =>
      api_user_list_create({ product_id: variables.product_id, user_list_type: variables.type }),
    onSuccess: (_, variables) => {
      query_client.invalidateQueries({ queryKey: ['product-user-list', product_id] })
      query_client.invalidateQueries({ queryKey: ['user-list', variables.type] })
      notifications.show({
        title: 'Success',
        message: `Product added to ${variables.type}.`,
        color: 'green',
      })
    },
    onError: (err) => {
      notifications.show({
        title: 'Action Failed',
        message: error_get_message(err),
        color: 'red',
      })
    },
  })

  const mutation_remove_from_list = useMutation({
    mutationFn: (variables: { product_id: number; type: 'whitelist' | 'blacklist' }) =>
      api_user_list_delete({ product_id: variables.product_id }),
    onSuccess: (_, variables) => {
      query_client.invalidateQueries({ queryKey: ['product-user-list', product_id] })
      query_client.invalidateQueries({ queryKey: ['user-list', variables.type] })
      notifications.show({
        title: 'Success',
        message: `Product removed from ${variables.type}.`,
        color: 'green',
      })
    },
    onError: (err) => {
      notifications.show({
        title: 'Action Failed',
        message: error_get_message(err),
        color: 'red',
      })
    },
  })

  const product = $product_response?.data?.[0]
  const $show_loader = $is_fetching && !product

  return (
    <Center className="w-full flex flex-col pb-[2rem]">
      <Stack gap="xl" className="max-w-[28rem] w-full">
        {error && (
          <Alert color="red" radius="md">
            {error_get_message(error)}
          </Alert>
        )}

        {$show_loader ? (
          <Center className="py-[5rem]">
            <Loader color="green" size="lg" />
          </Center>
        ) : !product ? (
          <Center className="py-[5rem]">
            <Text size="md" c="dimmed" fw={600}>
              Product not found.
            </Text>
          </Center>
        ) : (
          <CardProductProfile
            product_name={product.product_name}
            product_type={product.product_type || 'food'}
            brand_name={product.brand_name || null}
            brand_is_boycotted={product.brand_is_boycotted || null}
            brand_boycott_reasons={product.brand_boycott_reasons || null}
            brand_boycott_alternatives={product.brand_boycott_alternatives || null}
            product_ecoscore={product.product_ecoscore || null}
            product_nova_group={product.product_nova_group || null}
            product_nutriscore={product.product_nutriscore || null}
            product_metadata={product.product_metadata}
            product_images={product.product_images}
            is_whitelisted={is_whitelisted}
            is_blacklisted={is_blacklisted}
            on_add_to_whitelist={
              product.product_id !== undefined
                ? () => mutation_add_to_list.mutate({ product_id: product.product_id!, type: 'whitelist' })
                : undefined
            }
            on_add_to_blacklist={
              product.product_id !== undefined
                ? () => mutation_add_to_list.mutate({ product_id: product.product_id!, type: 'blacklist' })
                : undefined
            }
            on_remove_from_whitelist={
              product.product_id !== undefined
                ? () => mutation_remove_from_list.mutate({ product_id: product.product_id!, type: 'whitelist' })
                : undefined
            }
            on_remove_from_blacklist={
              product.product_id !== undefined
                ? () => mutation_remove_from_list.mutate({ product_id: product.product_id!, type: 'blacklist' })
                : undefined
            }
            is_loading_whitelist={
              mutation_add_to_list.isPending && mutation_add_to_list.variables?.type === 'whitelist'
            }
            is_loading_blacklist={
              mutation_add_to_list.isPending && mutation_add_to_list.variables?.type === 'blacklist'
            }
            is_loading_remove_whitelist={
              mutation_remove_from_list.isPending && mutation_remove_from_list.variables?.type === 'whitelist'
            }
            is_loading_remove_blacklist={
              mutation_remove_from_list.isPending && mutation_remove_from_list.variables?.type === 'blacklist'
            }
          />
        )}
      </Stack>
    </Center>
  )
}
