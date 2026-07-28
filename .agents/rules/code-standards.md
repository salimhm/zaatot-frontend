---
trigger: always_on
---

# Restrictions

- **Strictly use Mantine UI components for building everything from forms to every single component**
- **Strictly use rem not px and tailwind-classes not style**
- **Strictly few comments; code clarity and readability should render comments unnecessary**
- **Strictly the name of a module, component, or whatever must be singular, not plural, except routes folder because its predefinend from tanstack/react-router**
- **Strictly use module path aliases instead of relative paths: `@api`, `@routes`, `@view`, `@layout`, `@lib`, `@dto`, `@enum`, `@form`, `@card`, `@src`, and `@<every-single-component-group-name>`**.
- **Strictly use the exact backend keys and field names as prop names and variable names in cards, DTOs, views, and components rather than generic abbreviations or aliases (e.g., use `product_name`, `brand_id`, `created_at` instead of `name`, `id`, `date`)**.

- **NB**: Each file in src/routes should import its corresponding component from `src/component/view`. This ensures that `src/routes` is dedicated solely to routing logic, `src/routes` contains _only_ lazy-load definitions.

# Naming Conventions

Adherence to strict naming conventions is essential:

1. **Files and folders**: kebab-case (e.g., `sign-in.view.tsx`, `product.card.tsx`, `order.form.tsx`, `auth.dto.api.ts`, `order.dto.form.ts`)
2. **Classes and components**: PascalCase (e.g., `CardProduct`, `FormOrder`)
3. **Constants, variables, functions**: snake_case (e.g., `api_find_product`, `max_width`)
4. **State getters**: prefixed with `$` (e.g., `$is_loading`, `$message`)
5. **State setters**: prefixed with `$_` (e.g., `$_is_loading`, `$_message`)
6. **CRUD Naming**: use `find`, `create`, `update`, or `delete`. Do not use variations like `get`, `add`, `remove`, or `append` entity names.
7. **Imports/Exports**: All imports/exports must follow this naming format (Components must be exported as default!):
   **Components**: `<ComponentGroupName><ComponentName>`  
    _Examples:_ `FormOrder`, `CardProduct`, `RouteIndex`, `ViewSignIn`
   **Const, variables, types, interfaces & functions**:
   _Examples:_ `api_product_find`, `dto_api_product`, `dto_form_sign_in`
