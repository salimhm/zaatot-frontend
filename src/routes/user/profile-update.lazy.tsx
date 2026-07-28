import { createLazyFileRoute } from '@tanstack/react-router'
import ViewUserProfileUpdate from '@view/user/profile-update.view'

export const Route = createLazyFileRoute('/user/profile-update')({
  component: ViewUserProfileUpdate,
})
