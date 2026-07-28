---
name: example-api
description: Required code pattern for all api-generated outputs for our frontend.
---

1. **index.ts**: Strictly follow this pattern!

```
import { treaty } from "@elysiajs/eden"
import type { App } from "@src/eden"

export const BACKEND_URL = "http://localhost:3000"

export const api = treaty<App>(BACKEND_URL)
```

2. **<backend-module-name>.api.ts**: Strictly follow this pattern!

```
import { api } from "@api/index"
import { dto_api_<backend_module_name> } from "@api/index"

export async function api_<backend_module_name>_<function_name>(
  {/* query */}: dto_api_<backend_module_name>.<function_name>.query,
  {/* body */}: dto_api_<backend_module_name>.<function_name>.body,
): dto_api_<backend_module_name>.<function_name>.response {
  const response = await api.<backend_module_name>.<method_name(get | post | put | patch | delete)>()
  // rest of code
}
```

3. **<backend-module-name>.dto.api.ts**: Strictly follow this pattern!

- **IMPORTANT**: Never hardcode string literals for enums in DTOs. Always import and use the corresponding `type_enum_*` from `@lib/enum.lib`.

```
import { type_enum_example } from "@lib/enum.lib"

export interface dto_api_<backend_module_name> {
  <function_name>: {
    query: {
      column_name: column_type,
      // ...other properties
    },
    body: {
      column_name: column_type,
      // ...other properties
    },
    response: {
      data: {
        column_name: column_type,
        // ...other properties
      }[],
      // ...other properties
    }
  },
  // ...other properties
}
```
