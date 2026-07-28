import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '@src/routeTree.gen'

const query_client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30,
      retry: false,
    },
  },
})

const router = createRouter({
  routeTree,
  context: { queryClient: query_client },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  return (
    <QueryClientProvider client={query_client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
