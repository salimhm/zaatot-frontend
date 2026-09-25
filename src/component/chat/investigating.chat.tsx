import { Group, Text, Image, Stack, ThemeIcon } from '@mantine/core'
import { useSelector } from '@tanstack/react-store'
import { store_chat } from '@store/chat.store'
import { CheckCircleIcon, CircleNotchIcon, WarningIcon, XCircleIcon } from '@phosphor-icons/react'
import type { dto_chat_investigating } from '@chat/investigating.dto.chat'
import type { type_workflow_step } from '@store/chat.store'

const completed_statuses = new Set(['completed', 'evidence_found'])
const running_statuses = new Set(['running', 'pending'])
const failed_statuses = new Set(['failed', 'unavailable'])

function step_icon(step: type_workflow_step) {
  const status = step.status || ''

  if (completed_statuses.has(status)) {
    return <CheckCircleIcon weight="fill" size="1rem" />
  }
  if (running_statuses.has(status)) {
    return <CircleNotchIcon weight="bold" size="1rem" className="animate-spin" />
  }
  if (failed_statuses.has(status)) {
    return <XCircleIcon weight="fill" size="1rem" />
  }
  return <WarningIcon weight="fill" size="1rem" />
}

function step_color(step: type_workflow_step): string {
  const status = step.status || ''

  if (completed_statuses.has(status)) return 'teal'
  if (running_statuses.has(status)) return 'blue'
  if (failed_statuses.has(status)) return 'red'
  return 'yellow'
}

function step_variant(step: type_workflow_step): 'light' | 'outline' {
  const status = step.status || ''
  if (completed_statuses.has(status) || failed_statuses.has(status)) return 'light'
  return 'outline'
}

function readable_status(status?: string): string {
  return typeof status === 'string' ? status.replaceAll('_', ' ') : ''
}

function format_duration(ms?: number | null): string | null {
  if (ms == null) return null
  if (ms < 1000) return `${ms}ms`
  return `${(ms / 1000).toFixed(1)}s`
}

export default function ChatInvestigating(
  {}: dto_chat_investigating['in'],
): dto_chat_investigating['out'] {
  const steps = useSelector(store_chat, (state) => state.investigation_steps)

  return (
    <div className="flex justify-start px-[0.25rem] animate-[fade-in_150ms_ease-out]">
      <div className="max-w-[90%] w-full">
        <Group gap={8} align="center">
          <Image
            src="/logo-32.png"
            alt="zaatot"
            className="!w-[1.25rem] !h-[1.25rem]"
          />
          <Text fw={700} fz="0.8125rem" className="text-[#10b981]">
            ZAATOT is investigating
          </Text>
        </Group>

        <Stack gap="sm" className="mt-[0.75rem] pl-[0.25rem]">
          {steps.map((step, idx) => (
            <Group key={step.step_id || idx} gap="sm" align="flex-start" wrap="nowrap" className="animate-[fade-in_250ms_ease-out]">
              <ThemeIcon
                size="1.25rem"
                radius="xl"
                color={step_color(step)}
                variant={step_variant(step)}
                className="mt-[0.125rem] shrink-0"
              >
                {step_icon(step)}
              </ThemeIcon>
              <div className="min-w-0">
                <Text fz="0.875rem" fw={600} className="text-gray-800 truncate">
                  {step.title || 'Processing...'}
                </Text>
                <Group gap={4} align="center" className="mt-[0.0625rem]">
                  {step.agent && (
                    <Text fz="0.6875rem" c="dimmed" fw={500}>
                      {step.agent}
                    </Text>
                  )}
                  {step.agent && step.status && (
                    <Text fz="0.6875rem" c="dimmed">·</Text>
                  )}
                  {step.status && (
                    <Text fz="0.6875rem" c="dimmed">
                      {readable_status(step.status)}
                    </Text>
                  )}
                  {step.metadata?.duration_ms != null && (
                    <>
                      <Text fz="0.6875rem" c="dimmed">·</Text>
                      <Text fz="0.6875rem" c="dimmed">
                        {format_duration(step.metadata.duration_ms)}
                      </Text>
                    </>
                  )}
                </Group>
                {step.detail && (
                  <Text fz="0.75rem" c="dimmed" className="leading-snug mt-[0.125rem]">
                    {step.detail}
                  </Text>
                )}
              </div>
            </Group>
          ))}

          <Group gap={8} align="center" className="ml-[1.75rem] mt-[0.25rem] pb-[1rem]">
            <span className="flex gap-[0.1875rem] items-center">
              <span className="w-[0.3125rem] h-[0.3125rem] rounded-full bg-[#10b981] animate-[dot-pulse_1.4s_ease-in-out_infinite]" />
              <span className="w-[0.3125rem] h-[0.3125rem] rounded-full bg-[#10b981] animate-[dot-pulse_1.4s_ease-in-out_0.2s_infinite]" />
              <span className="w-[0.3125rem] h-[0.3125rem] rounded-full bg-[#10b981] animate-[dot-pulse_1.4s_ease-in-out_0.4s_infinite]" />
            </span>
          </Group>
        </Stack>
      </div>
    </div>
  )
}
