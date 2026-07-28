---
description: Form implementation guidelines using @mantine/form
---

# Form Guidelines (@mantine/form)

All forms in the frontend should use `@mantine/form` for state management, validation, and submission handling.
Do not use raw HTML forms or manual state management (e.g., `useState` for each field) unless dealing with a single, standalone input outside of a traditional structure.

## Rules

1. **useForm Hook**: Always use `useForm` from `@mantine/form` to initialize the form state.
2. **Initial Values**: Define `initialValues` clearly.
3. **Validation**: Use `zodResolver` or native Mantine validation rules (`hasLength`, `isEmail` etc.) inside the `useForm` hook for validation logic.
4. **onSubmit**: Use `form.onSubmit((values) => handleSubmit(values))` on the form element.
5. **Input Bindings**: Bind inputs to form state using `{...form.getInputProps('fieldName')}`.

## Example

```tsx
import { useForm } from '@mantine/form'
import { TextInput, Button, Box } from '@mantine/core'

export function ExampleForm() {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
    },
  })

  return (
    <Box component="form" onSubmit={form.onSubmit()}>
      <TextInput label="Email" placeholder="your@email.com" {...form.getInputProps('email')} />
      <TextInput label="Name" placeholder="John Doe" mt="md" {...form.getInputProps('name')} />
      <Button type="submit" mt="md">
        Submit
      </Button>
    </Box>
  )
}
```
