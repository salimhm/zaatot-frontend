import { UnstyledButton, Text } from '@mantine/core'
import { useNavigate, useLocation } from '@tanstack/react-router'
import { HouseIcon, BarcodeIcon, ClockIcon, UserIcon } from '@phosphor-icons/react'

export default function LayoutAppBottom() {
  const navigate = useNavigate()
  const location = useLocation()
  const current_path = location.pathname

  const nav_items = [
    { label: 'Home', to: '/', icon: HouseIcon },
    { label: 'Scan', to: '/scan', icon: BarcodeIcon },
    { label: 'History', to: '/user/history', icon: ClockIcon },
    { label: 'Profile', to: '/user/profile', icon: UserIcon },
  ]

  return (
    <nav className="fixed bottom-[1rem] left-1/2 -translate-x-1/2 w-[90%] max-w-[28rem] h-[4rem] bg-white/90 backdrop-blur-md border border-solid border-[rgba(0,0,0,0.08)] shadow-lg rounded-full flex items-center justify-around z-[100] px-[1rem]">
      {nav_items.map((item) => {
        const is_active = item.to === '/' ? current_path === '/' : current_path.startsWith(item.to)
        const Icon = item.icon

        return (
          <UnstyledButton
            key={item.to}
            onClick={() => navigate({ to: item.to })}
            className={`flex flex-col items-center justify-center w-[4rem] h-[3.25rem] rounded-[1rem] transition-all duration-200 ${
              is_active ? 'scale-105' : 'hover:text-gray-800'
            }`}
          >
            <Icon
              size="1.5rem"
              weight={is_active ? 'fill' : 'regular'}
              className={is_active ? 'text-[#10b981]' : 'text-gray-500'}
            />
            <Text
              size="xs"
              fw={is_active ? 700 : 500}
              className={`mt-[0.125rem] tracking-tight ${is_active ? 'text-[#10b981]' : 'text-gray-500'}`}
            >
              {item.label}
            </Text>
          </UnstyledButton>
        )
      })}
    </nav>
  )
}
