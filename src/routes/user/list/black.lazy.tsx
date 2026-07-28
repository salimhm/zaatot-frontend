import { createLazyFileRoute } from '@tanstack/react-router'
import ViewUserListBlack from '@view/user/list/black.view'

export const Route = createLazyFileRoute('/user/list/black')({
  component: ViewUserListBlack,
})
