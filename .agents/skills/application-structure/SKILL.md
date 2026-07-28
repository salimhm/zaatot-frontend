---
name: application-structure
description: Application structure and /src folder tree for our frontend.
---

# Application Structure

```
public/
src/
├── eden.d.ts # The generated ElysiaJS Eden Treaty types
├── api/
│   └── index.ts # the client main function
│   └── <backend-module-name>.api.ts
│   └── <backend-module-name>.dto.api.ts
├── component/
│   └── layout/
│   │   └── navbar.layout.tsx
│   │   └── navbar.dto.layout.ts
│   │   └── main.layout.tsx
│   │   └── main.dto.layout.ts
│   │   └── left.layout.tsx
│   │   └── left.dto.layout.ts
│   │   └── right.layout.tsx
│   │   └── right.dto.layout.ts
│   │   └── footer.layout.tsx
│   │   └── footer.dto.layout.ts
│   └── card/
│   │   └── <card-name>.card.tsx
│   │   └── <card-name>.dto.card.ts
│   └── form/
│   │   └── <form-name>.form.tsx
│   │   └── <form-name>.dto.form.ts
│   └── view/ # you must strictly follow the same folder's structure in the routes folder!
│   │   └── auth/
│   │   │   └── sign-in.view.tsx
│   │   │   └── sign-up.view.tsx
│   │   ├── <view-name>.view.tsx
│   │   └── <view-name>.dto.view.ts
│   └── <component-group-name>/
│       └── <component-name>.<component-group-name>.tsx
│       └── <component-name>.dto.<component-group-name>.ts
├── lib/ #GLOBAL REUSED objects, arrays etc...
│   └── dto.lib.ts #GLOBAL REUSED DTO's
│   └── enum.lib.ts #GLOBAL REUSED ENUM's
│   └── error.lib.ts #GLOBAL REUSED Error's
├── routes/ # DTOs for routes should be colocated in the route file rather than imported from external files
│   ├── auth/
│   │   └── sign-in.lazy.tsx
│   ├── settings/
│   │   └── update-info.lazy.tsx
│   ├── profile/
│   │   └── index.lazy.tsx
│   ├── index.lazy.tsx
│   └── <...>.lazy.tsx
├── store/
│   └── <store-name>.store.ts
└── app.tsx
└── index.tsx
└── index.css
```
