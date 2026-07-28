import { createLazyFileRoute } from '@tanstack/react-router'
import ViewSignIn from '@view/auth/sign-in.view'

export const Route = createLazyFileRoute('/auth/sign-in')({
  component: ViewSignIn,
})
