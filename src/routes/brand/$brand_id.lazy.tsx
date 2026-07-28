import { createLazyFileRoute } from '@tanstack/react-router'
import ViewBrandProfile from '@view/brand/profile.view'

export const Route = createLazyFileRoute('/brand/$brand_id')({
  component: ViewBrandProfile,
})
