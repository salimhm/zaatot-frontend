import { createLazyFileRoute } from '@tanstack/react-router'
import ViewScan from '@view/scan.view'

export const Route = createLazyFileRoute('/scan')({
  component: ViewScan,
})
