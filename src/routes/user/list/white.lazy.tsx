import { createLazyFileRoute } from '@tanstack/react-router'
import ViewUserListWhite from '@view/user/list/white.view'

export const Route = createLazyFileRoute('/user/list/white')({
  component: ViewUserListWhite,
})
