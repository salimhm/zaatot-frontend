import { Store } from '@tanstack/react-store'

export const store_user = new Store({
  user_id: localStorage.getItem('user_id'),
  user_first_name: localStorage.getItem('user_first_name'),
  user_last_name: localStorage.getItem('user_last_name'),
  user_phone: localStorage.getItem('user_phone'),
  user_image: localStorage.getItem('user_image'),
})

export const store_set_user = (data: Partial<typeof store_user.state>) => {
  store_user.setState((state) => ({
    ...state,
    ...data,
  }))
}
