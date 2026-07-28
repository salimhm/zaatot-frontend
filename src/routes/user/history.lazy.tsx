import { createLazyFileRoute } from '@tanstack/react-router'
import ViewUserHistory from '@view/user/history.view'

export const Route = createLazyFileRoute('/user/history')({
  component: ViewUserHistory,
})
