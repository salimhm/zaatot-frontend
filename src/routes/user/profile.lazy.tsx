import { createLazyFileRoute } from '@tanstack/react-router'
import ViewUserProfile from '@view/user/profile.view'

export const Route = createLazyFileRoute('/user/profile')({
  component: ViewUserProfile,
})
