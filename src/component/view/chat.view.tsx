import { useRef, useEffect, useCallback } from 'react'
import { Stack } from '@mantine/core'
import { useSelector } from '@tanstack/react-store'
import { useLocation } from '@tanstack/react-router'
import {
  store_chat,
  store_set_chat,
  store_chat_send_message,
} from '@store/chat.store'
import ChatHeader from '@chat/header.chat'
import ChatWelcome from '@chat/welcome.chat'
import ChatComposer from '@chat/composer.chat'
import ChatMessageUser from '@chat/message-user.chat'
import ChatMessageZaatot from '@chat/message-zaatot.chat'
import ChatInvestigating from '@chat/investigating.chat'
import CardProductContext from '@card/product-context.card'

export default function ViewChat() {
  const location = useLocation()
  const messages = useSelector(store_chat, (state) => state.messages)
  const input_value = useSelector(store_chat, (state) => state.input_value)
  const is_sending = useSelector(store_chat, (state) => state.is_sending)
  const is_investigating = useSelector(store_chat, (state) => state.is_investigating)
  const attached_product = useSelector(store_chat, (state) => state.attached_product)
  const messages_end_ref = useRef<HTMLDivElement>(null)
  const has_initialized = useRef(false)

  useEffect(() => {
    if (has_initialized.current) return
    has_initialized.current = true

    const state = location.state as { initial_message?: string } | undefined
    if (state?.initial_message) {
      store_set_chat({ input_value: state.initial_message })
    }
  }, [location.state])

  useEffect(() => {
    messages_end_ref.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, is_investigating])

  const handle_send = useCallback(() => {
    const trimmed = input_value.trim()
    if (!trimmed) return
    store_chat_send_message(trimmed)
  }, [input_value])

  const handle_suggestion_click = useCallback((prompt: string) => {
    store_set_chat({ input_value: prompt })
  }, [])

  const handle_input_change = useCallback((value: string) => {
    store_set_chat({ input_value: value })
  }, [])

  const has_messages = messages.length > 0

return (
  <div className="fixed inset-0 z-40 flex flex-col bg-white pb-[5.5rem]">
    <div className="shrink-0">
      <ChatHeader />
    </div>

    <div className="flex-1 min-h-0 overflow-y-auto px-[1rem]">
      <div className="max-w-[50rem] mx-auto w-full min-h-full flex flex-col">
        {!has_messages ? (
          <div className="flex-1 flex flex-col justify-center">
            <ChatWelcome on_suggestion_click={handle_suggestion_click} />
          </div>
        ) : (
          <Stack gap="lg" className="py-[1rem]">
            {attached_product && (
              <CardProductContext
                product_name={attached_product.product_name}
                product_brand={attached_product.product_brand}
                product_category={attached_product.product_category}
                product_barcode={attached_product.product_barcode}
                product_image={attached_product.product_image}
              />
            )}

            {messages.map((msg) =>
              msg.message_role === 'user' ? (
                <ChatMessageUser
                  key={msg.message_id}
                  message_content={msg.message_content}
                  created_at={msg.created_at}
                />
              ) : (
                <ChatMessageZaatot
                  key={msg.message_id}
                  message_content={msg.message_content}
                  created_at={msg.created_at}
                  decision={msg.decision}
                  sources={msg.sources}
                  steps={msg.steps}
                  reasons={msg.reasons}
                  outcome={msg.outcome}
                  limitations={msg.limitations}
                />
              ),
            )}

            {is_investigating && <ChatInvestigating />}

            <div ref={messages_end_ref} />
          </Stack>
        )}
      </div>
    </div>

    <div className="shrink-0">
      <ChatComposer
        input_value={input_value}
        on_input_change={handle_input_change}
        on_send={handle_send}
        is_sending={is_sending}
      />
    </div>
  </div>
)
}
