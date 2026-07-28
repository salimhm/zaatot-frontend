import { createLazyFileRoute } from '@tanstack/react-router'
import ViewProductIndex from '@view/product/index.view'

export const Route = createLazyFileRoute('/product/')({
  component: ViewProductIndex,
})
