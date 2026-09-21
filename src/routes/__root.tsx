import { Outlet, createRootRouteWithContext, redirect, useLocation } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'
import { UnstyledButton, Text } from '@mantine/core'
import { CaretLeftIcon } from '@phosphor-icons/react'

import LayoutAppBottom from '@layout/app-bottom.layout'
import ViewNotFound from '@view/not-found.view'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: ({ location }) => {
    const is_authenticated = localStorage.getItem('user_id') !== null
    const is_auth_page = location.pathname.startsWith('/auth/')

    if (!is_authenticated && !is_auth_page) {
      throw redirect({ to: '/auth/sign-in' })
    }

    if (is_authenticated && is_auth_page) {
      throw redirect({ to: '/' })
    }
  },
  component: () => {
    const location = useLocation()
    const pathname = location.pathname
    const is_auth_route = pathname.startsWith('/auth/')
    const is_root_tab = ['/', '/scan', '/chat', '/user/history', '/user/profile'].includes(pathname)
    const show_back_button = !is_root_tab && !is_auth_route

    if (is_auth_route) {
      return (
        <main className="min-h-screen bg-transparent flex items-center justify-center">
          <Outlet />
        </main>
      )
    }

    return (
      <div className="min-h-screen bg-transparent flex flex-col">
        {show_back_button && (
          <header className="fixed top-[.5rem] left-1/2 -translate-x-1/2 w-full max-w-[58rem] h-[3.5rem] flex items-center z-[100] px-[1.25rem]">
            <UnstyledButton
              onClick={() => window.history.back()}
              className="flex items-center gap-[0.25rem] text-[#10b981] active:opacity-60 transition-opacity"
            >
              <CaretLeftIcon size="1.5rem" weight="bold" />
              <Text size="sm" fw={700}>
                Back
              </Text>
            </UnstyledButton>
          </header>
        )}

        <main
          className={`flex-1 w-full px-[1rem] py-[1rem] pb-[6rem] overflow-y-auto ${
            show_back_button ? 'pt-[4.25rem]' : ''
          }`}
        >
          <div className="max-w-[72rem] mx-auto w-full">
            <Outlet />
          </div>
        </main>

        <LayoutAppBottom />
      </div>
    )
  },
  notFoundComponent: () => <ViewNotFound />,
  wrapInSuspense: true,
})
