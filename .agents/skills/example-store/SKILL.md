---
name: example-store
description: Required code pattern for all store-generated outputs for our frontend.
---

# Store Pattern

1. **<store-name>.store.ts**: Strictly follow this pattern!

```typescript
import { Store } from '@tanstack/react-store'

export const store_<store_name> = new Store({
  // initial state...
})

export const store_set_<store_name> = (data: Partial<typeof store_<store_name>.state>) => {
  store_<store_name>.setState((state) => ({
    ...state,
    ...data,
  }))
}
```

## Rules:

- The store variable must be named `store_<store_name>`.
- The setter function must be named `store_set_<store_name>`.
- Use TanStack Store for state management.
