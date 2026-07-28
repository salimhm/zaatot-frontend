import { createLazyFileRoute } from '@tanstack/react-router'
import ViewIndex from '@view/index.view'

export const Route = createLazyFileRoute('/')({
  component: ViewIndex,
})
