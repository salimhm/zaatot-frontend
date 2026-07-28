---
name: example-route
description: Required code pattern for all route-generated outputs for our frontend.
---

1. **\_\_root.tsx**: Strictly follow this pattern!

```
import { Outlet, createRootRouteWithContext, redirect } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'

import AppHeader from '@layout/app-header.layout'
import AppLeft from '@layout/app-left.layout'
import AppRight from '@layout/app-right.layout'

import ViewNotFound from '@view/not-found.view'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: ({ location }) => {
    const is_authenticated = localStorage.getItem('user_id') !== null;
    const is_auth_page = location.pathname.startsWith('/auth/');

    if (!is_authenticated && !is_auth_page && location.pathname !== '/set-localstorage') {
      throw redirect({
        to: '/auth/sign-in'
      });
    }

    if (is_authenticated && is_auth_page) {
      throw redirect({
        to: '/'
      });
    }
  },
  component: () => {
    const is_auth_route = window.location.pathname.startsWith('/auth/');

    if (is_auth_route) return <main><Outlet /></main>
    if (window.location.pathname === '/set-localstorage') return <main><Outlet /></main>

    return (
      <div className="w-full min-h-full">
        <AppHeader />

        <div className="px-1 lg:px-[14rem] pt-16 lg:pt-[0.025rem]">
          <div className="hidden lg:block">
            <AppRight />
            <AppLeft />
          </div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    );
  },
  notFoundComponent: () => ViewNotFound,
  wrapInSuspense: true,
})
```

2. **<route-name>.lazy.tsx**: Strictly follow this pattern!

```
import { createLazyFileRoute } from '@tanstack/react-router'
import ViewComponentName from "@view/<component-name>.view"

export const Route = createLazyFileRoute('/<route-link>')({
  component: <ViewComponentName />,
})
```
