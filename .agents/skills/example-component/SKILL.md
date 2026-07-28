---
name: example-component
description: Required code pattern for all component-generated outputs for our frontend.
---

1. **<component-name>.<component-group-name>.tsx**: Strictly follow this pattern!

```
import { dto_<component_group_name>_<component_name> } from "<component-name>.dto.<component-group-name>.ts"

export default function <ComponentGroupName><ComponentName>(
  {//props}: dto_<component_group_name>_<component_name>.in
): dto_<component_group_name>_<component_name>.out {
  // your code...
}
```

2. **<component-name>.dto.<component-group-name>.ts**: Strictly follow this pattern!

```
export interface dto_<component_group_name>_<component_name> {
  in: {
    // ...properties
  },
  out: {
    // ...properties
  }
}
```
