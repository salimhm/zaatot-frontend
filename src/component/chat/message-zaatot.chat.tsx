import { useState } from 'react'
import { Stack, Group, Text, Image, ThemeIcon, Anchor, Collapse, UnstyledButton } from '@mantine/core'
import { CheckCircleIcon, InfoIcon, CaretDownIcon, ArrowSquareOutIcon, WarningCircleIcon } from '@phosphor-icons/react'
import CardDecision from '@card/decision.card'
import type { dto_chat_message_zaatot } from '@chat/message-zaatot.dto.chat'

function safe_http_url(value?: string): URL | null {
  if (!value) return null
  try {
    const url = new URL(value)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null
    return url
  } catch {
    return null
  }
}

function readable_outcome(outcome?: string): string {
  if (!outcome || typeof outcome !== 'string') return ''
  return outcome.charAt(0).toUpperCase() + outcome.slice(1).replaceAll('_', ' ')
}

export default function ChatMessageZaatot(
  { message_content, decision, sources, steps, reasons, outcome, limitations }: dto_chat_message_zaatot['in'],
): dto_chat_message_zaatot['out'] {
  const [$limitations_open, $_limitations_open] = useState(false)
  const has_reasons = reasons && reasons.length > 0
  const has_sources = sources && sources.length > 0
  const has_limitations = limitations && limitations.length > 0

  return (
    <div className="flex justify-start px-[0.25rem] animate-[fade-in_150ms_ease-out]">
      <Stack gap="sm" className="max-w-[90%] w-full">
        <Group gap={8} align="center">
          <Image
            src="/logo-32.png"
            alt="zaatot"
            className="!w-[1.25rem] !h-[1.25rem]"
          />
          <Text fw={700} fz="0.8125rem" className="text-[#10b981]">
            ZAATOT
          </Text>
        </Group>

        {steps && steps.length > 0 && (
          <details className="group mt-[0.25rem] bg-[#fcfcfc] border border-solid border-[rgba(0,0,0,0.06)] rounded-[0.75rem] overflow-hidden">
            <summary className="flex items-center justify-between p-[0.75rem] cursor-pointer outline-none select-none hover:bg-gray-50 transition-colors">
              <Text fz="0.8125rem" fw={600} className="text-gray-700">
                View Investigation Details
              </Text>
              <CaretDownIcon size="1rem" className="text-gray-400 group-open:rotate-180 transition-transform duration-200" />
            </summary>
            <div className="p-[0.75rem] pt-0 border-t border-solid border-[rgba(0,0,0,0.04)]">
              <Stack gap="xs" className="mt-[0.5rem]">
                {steps.map((step, idx) => {
                  const is_completed = step.status === 'completed' || step.status === 'evidence_found'
                  return (
                    <Group key={step.step_id || idx} gap="sm" align="flex-start" wrap="nowrap">
                      <ThemeIcon
                        size="1.125rem"
                        radius="xl"
                        color={is_completed ? 'teal' : 'gray'}
                        variant="light"
                        className="mt-[0.125rem] shrink-0"
                      >
                        {is_completed ? (
                          <CheckCircleIcon weight="fill" size="0.875rem" />
                        ) : (
                          <InfoIcon weight="bold" size="0.875rem" />
                        )}
                      </ThemeIcon>
                      <div className="min-w-0">
                        <Text fz="0.8125rem" fw={600} className="text-gray-800 truncate">
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
                              {typeof step.status === 'string' ? step.status.replaceAll('_', ' ') : ''}
                            </Text>
                          )}
                          {step.metadata?.duration_ms != null && (
                            <>
                              <Text fz="0.6875rem" c="dimmed">·</Text>
                              <Text fz="0.6875rem" c="dimmed">
                                {step.metadata.duration_ms < 1000
                                  ? `${step.metadata.duration_ms}ms`
                                  : `${(step.metadata.duration_ms / 1000).toFixed(1)}s`}
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
                  )
                })}
              </Stack>
            </div>
          </details>
        )}

        <Text fz="0.9375rem" className="leading-relaxed text-black whitespace-pre-wrap pl-[0.125rem]">
          {message_content}
        </Text>

        {has_reasons && (
          <div className="pl-[0.125rem]">
            <Text fz="0.8125rem" fw={700} className="text-gray-700 mb-[0.25rem]">
              Why?
            </Text>
            <Stack gap={4}>
              {reasons!.map((reason, idx) => (
                <Text key={idx} fz="0.8125rem" className="text-gray-600 leading-snug">
                  • {reason}
                </Text>
              ))}
            </Stack>
          </div>
        )}

        {decision && (
          <CardDecision
            decision_status={decision.decision_status}
            decision_summary={decision.decision_summary}
            decision_confidence={decision.decision_confidence}
            decision_confidence_label={decision.decision_confidence_label}
          />
        )}

        {outcome && !decision && (
          <div className="px-[0.75rem] py-[0.5rem] bg-gray-50 rounded-[0.5rem] border border-solid border-[rgba(0,0,0,0.06)]">
            <Text fz="0.8125rem" fw={600} className="text-gray-700">
              {readable_outcome(outcome)}
            </Text>
          </div>
        )}

        {has_sources && (
          <div className="border border-solid border-[rgba(0,0,0,0.08)] rounded-[0.75rem] px-[0.875rem] py-[0.75rem] bg-white">
            <Group gap={8} align="center" className="mb-[0.5rem]">
              <InfoIcon size="0.875rem" weight="duotone" className="text-[#10b981]" />
              <Text fw={600} fz="0.8125rem" className="text-black">
                Sources
              </Text>
            </Group>
            <Stack gap={6}>
              {sources!.map((source, idx) => {
                const parsed_url = safe_http_url(source.source_url)
                return parsed_url ? (
                  <Anchor
                    key={idx}
                    href={parsed_url.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    fz="0.8125rem"
                    className="text-[#10b981] flex items-center gap-[0.25rem]"
                  >
                    {source.source_title}
                    <ArrowSquareOutIcon size="0.75rem" />
                  </Anchor>
                ) : (
                  <Text key={idx} fz="0.8125rem" c="dimmed">
                    {source.source_title}
                  </Text>
                )
              })}
            </Stack>
          </div>
        )}

        {has_limitations && (
          <div className="border border-solid border-[rgba(0,0,0,0.06)] rounded-[0.75rem] overflow-hidden bg-[#fcfcfc]">
            <UnstyledButton
              onClick={() => $_limitations_open((v) => !v)}
              className="flex items-center justify-between w-full px-[0.875rem] py-[0.625rem] hover:bg-gray-50 transition-colors"
            >
              <Group gap={6} align="center">
                <WarningCircleIcon size="0.875rem" weight="duotone" className="text-yellow-500" />
                <Text fz="0.8125rem" fw={600} className="text-gray-600">
                  About this result
                </Text>
                <Text fz="0.75rem" c="dimmed">
                  {limitations!.length} {limitations!.length === 1 ? 'limitation' : 'limitations'}
                </Text>
              </Group>
              <CaretDownIcon
                size="0.875rem"
                className={`text-gray-400 transition-transform duration-200 ${$limitations_open ? 'rotate-180' : ''}`}
              />
            </UnstyledButton>
            <Collapse expanded={$limitations_open}>
              <Stack gap={4} className="px-[0.875rem] pb-[0.75rem]">
                {limitations!.map((limitation, idx) => (
                  <Text key={idx} fz="0.8125rem" c="dimmed" className="leading-snug">
                    • {limitation}
                  </Text>
                ))}
              </Stack>
            </Collapse>
          </div>
        )}
      </Stack>
    </div>
  )
}
