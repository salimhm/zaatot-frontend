import { createLazyFileRoute } from '@tanstack/react-router'
import ViewProductProfile from '@view/product/profile.view'

export const Route = createLazyFileRoute('/product/$product_id')({
  component: ViewProductProfile,
})
