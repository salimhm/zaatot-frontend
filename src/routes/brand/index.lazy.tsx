import { createLazyFileRoute } from '@tanstack/react-router'
import ViewBrandIndex from '@view/brand/index.view'

export const Route = createLazyFileRoute('/brand/')({
  component: ViewBrandIndex,
})
