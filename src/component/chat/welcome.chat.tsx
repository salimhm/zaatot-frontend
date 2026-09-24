import { Stack, Text, Image } from '@mantine/core'
import { useSelector } from '@tanstack/react-store'
import { store_user } from '@store/user.store'
import {
  PackageIcon,
  ScalesIcon,
  CurrencyDollarIcon,
  MagnifyingGlassIcon,
} from '@phosphor-icons/react'
import CardSuggestion from '@card/suggestion.card'
import type { dto_chat_welcome } from '@chat/welcome.dto.chat'

const suggestion_items = [
  { suggestion_text: 'Is this product good for me?', icon: <PackageIcon size="1.125rem" weight="duotone" className="text-[#10b981]" /> },
  { suggestion_text: 'Compare two products', icon: <ScalesIcon size="1.125rem" weight="duotone" className="text-[#10b981]" /> },
  { suggestion_text: 'Is this worth the price?', icon: <CurrencyDollarIcon size="1.125rem" weight="duotone" className="text-[#10b981]" /> },
  { suggestion_text: 'Find a better alternative', icon: <MagnifyingGlassIcon size="1.125rem" weight="duotone" className="text-[#10b981]" /> },
]

export default function ChatWelcome(
  { on_suggestion_click }: dto_chat_welcome['in'],
): dto_chat_welcome['out'] {
  const user_first_name = useSelector(store_user, (state) => state.user_first_name)
  const display_name = user_first_name
    ? user_first_name.charAt(0).toUpperCase() + user_first_name.slice(1)
    : null

  return (
    <Stack gap="xl" align="center" className="pt-[2rem] pb-[1rem] px-[0.5rem]">
      <Stack gap="md" align="center" className="text-center">
        <Image
          src="/logo-128.png"
          alt="zaatot"
          className="!w-[3.5rem] !h-auto"
        />

        <Stack gap={4}>
          <Text fw={700} fz="1.375rem" className="text-black tracking-tight">
            {display_name ? `Hi ${display_name}, I'm ZAATOT.` : "Hi, I'm ZAATOT."}
          </Text>
          <Text fz="1rem" c="dimmed" className="font-medium">
            What should we investigate?
          </Text>
        </Stack>

        <Text fz="0.8125rem" c="dimmed" className="max-w-[18rem] leading-relaxed">
          Ask me about a product, choice or decision.
        </Text>
      </Stack>

      <Stack gap="sm" className="w-full">
        {suggestion_items.map((item) => (
          <CardSuggestion
            key={item.suggestion_text}
            suggestion_text={item.suggestion_text}
            suggestion_icon={item.icon}
            on_click={on_suggestion_click}
          />
        ))}
      </Stack>
    </Stack>
  )
}
