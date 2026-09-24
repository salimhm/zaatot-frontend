import { createLazyFileRoute } from '@tanstack/react-router'
import ViewChat from '@view/chat.view'

export const Route = createLazyFileRoute('/chat/')({
  component: ViewChat,
})
