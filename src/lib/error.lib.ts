const error_messages: Record<string, string> = {
  'bad-request': 'Bad request.',
  'file-max-size': 'File size exceeds the limit.',
  'user-max-tenants': 'Maximum number of tenants reached.',
  'invalid-token': 'Session expired. Please sign in again.',
  'invalid-otp-code': 'Invalid OTP code.',
  'code-expired': 'The code has expired.',
  unauthorized: 'You are not authorized to perform this action.',
  'invalid-password': 'Incorrect password.',
  'not-found': 'Resource not found.',
  'not-found-user': 'User not found.',
  'not-found-tenant': 'Tenant not found.',
  'not-found-organization': 'Organization not found.',
  'not-found-contact': 'Contact not found.',
  'not-found-access': 'Access not found.',
  'not-found-file': 'File not found.',
  'not-found-product': 'Product not found.',
  'not-found-scan-history': 'Scan history not found.',
  'not-found-user-list': 'User list not found.',
  'email-already-exist': 'This email address is already registered.',
  'user-phone-exist': 'This phone number is already registered.',
  'tenant-is-required': 'Tenant is required.',
  'format-unsupported': 'Unsupported file format.',
  'unprocessable-entity': 'Unprocessable entity.',
  'invalid-column': 'Invalid column specified.',
  'action-not-defined': 'Action is not defined.',
  'phone-is-required': 'Phone number is required.',
  'too-many-requests': 'Too many requests. Please try again later.',
  'internal-server-error': 'Internal server error. Please try again later.',
  'service-unavailable': 'Service is temporarily unavailable.',
  'open-food-facts-configuration': 'Open Food Facts is not configured correctly.',
}

function format_error_code(code: string): string {
  if (error_messages[code]) return error_messages[code]
  return code.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) + '.'
}

export function error_get_message(error: unknown): string {
  console.error('error_get_message caught:', error)

  if (error && typeof error === 'object') {
    const e = error as Record<string, any>

    if ('value' in e && e.value) {
      const v = e.value as Record<string, any>
      if (typeof v === 'string') return format_error_code(v)
      if (typeof v === 'object') {
        if (v.type === 'validation') {
          const detail = v.expected ? ` (Expected: ${v.expected}, Found: ${JSON.stringify(v.found)})` : ''
          const message = v.message || v.summary || 'Validation Error'
          return `${message}${detail}`
        }
        const code_val = v.code || v.error
        if (typeof code_val === 'string') {
          return format_error_code(code_val)
        }
        if (v.message && typeof v.message === 'string') {
          return format_error_code(v.message)
        }
        if (v.summary && typeof v.summary === 'string') {
          return format_error_code(v.summary)
        }
        try {
          return JSON.stringify(v)
        } catch {
          /* ignore */
        }
      }
    }

    if ('message' in e && e.message) {
      if (typeof e.message === 'string') return format_error_code(e.message)
      if (typeof e.message === 'object') {
        if ('summary' in e.message && typeof e.message.summary === 'string') {
          return format_error_code(e.message.summary)
        }
        try {
          return JSON.stringify(e.message)
        } catch {
          /* ignore */
        }
      }
      return String(e.message)
    }

    try {
      const details = JSON.stringify(error)
      if (details !== '{}') return details
    } catch {
      /* ignore */
    }
  }

  if (typeof error === 'string') return format_error_code(error)

  return 'Something went wrong 😅'
}
