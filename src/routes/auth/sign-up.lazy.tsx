import { createLazyFileRoute } from '@tanstack/react-router'
import ViewSignUp from '@view/auth/sign-up.view'

export const Route = createLazyFileRoute('/auth/sign-up')({
  component: ViewSignUp,
})
