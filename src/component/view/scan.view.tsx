import { useState, useEffect } from 'react'
import {
  Center,
  Stack,
  Text,
  Box,
  Button,
  Alert,
  TextInput,
  ActionIcon,
  Divider,
  Card,
  Group,
  Badge,
} from '@mantine/core'
import {
  BarcodeScanner,
  BarcodeFormat,
  GoogleBarcodeScannerModuleInstallState,
} from '@capacitor-mlkit/barcode-scanning'
import { Capacitor } from '@capacitor/core'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { notifications } from '@mantine/notifications'
import { api_scan_identify } from '@api/scan.api'
import { error_get_message } from '@lib/error.lib'
import { ClipboardIcon, ShieldCheckIcon, ShieldWarningIcon } from '@phosphor-icons/react'

export default function ViewScan() {
  const navigate = useNavigate()
  const [$error, $_error] = useState('')
  const [$is_scanning, $_is_scanning] = useState(false)
  const [$is_starting, $_is_starting] = useState(false)
  const [$barcode_input, $_barcode_input] = useState('')
  const [$identify_result, $_identify_result] = useState<any | null>(null)

  const mutation_scan = useMutation({
    mutationFn: (scan_value: string) => api_scan_identify({ scan_value }),
    onSuccess: (data) => {
      $_error('')
      const scan_type = data?.data?.scan?.scan_type
      const product = data?.data?.product

      if (scan_type === 'barcode' || scan_type === 'url') {
        if (product) {
          $_barcode_input('')
          $_identify_result(null)
          navigate({ to: '/product/$product_id', params: { product_id: String(product.product_id) } })
        } else {
          $_identify_result(null)
          notifications.show({
            title: 'Product Unrecognized',
            message: 'No product information is available for this barcode/URL yet.',
            color: 'orange',
          })
        }
      } else {
        $_identify_result(data?.data || null)
      }
    },
    onError: (err) => {
      const msg = error_get_message(err)
      $_error(msg)
      $_identify_result(null)
      notifications.show({
        title: 'Scan Error',
        message: msg,
        color: 'red',
      })
    },
  })

  const run_native_scan = async () => {
    $_is_scanning(true)
    $_error('')
    try {
      const { barcodes } = await BarcodeScanner.scan({
        formats: [
          BarcodeFormat.Ean13,
          BarcodeFormat.Ean8,
          BarcodeFormat.UpcA,
          BarcodeFormat.UpcE,
          BarcodeFormat.Code128,
        ],
      })

      if (barcodes.length > 0) {
        const barcode_val = barcodes[0].rawValue || barcodes[0].displayValue
        mutation_scan.mutate(barcode_val)
      }
    } catch (err: any) {
      console.error(err)
      const err_msg = error_get_message(err)
      if (!err_msg.toLowerCase().includes('cancel') && !err_msg.toLowerCase().includes('user dismiss')) {
        $_error(err_msg)
      }
    } finally {
      $_is_scanning(false)
    }
  }

  const handle_start_scan = async () => {
    if ($is_starting || $is_scanning) return
    $_is_starting(true)
    $_error('')
    $_identify_result(null)

    try {
      const is_supported = await BarcodeScanner.isSupported()
      if (!is_supported.supported) {
        $_error('Barcode scanner is not supported on this device.')
        $_is_starting(false)
        return
      }

      if (Capacitor.getPlatform() === 'android') {
        const module_status = await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable()
        if (!module_status.available) {
          notifications.show({
            id: 'barcode-install-toast',
            title: 'Downloading Module',
            message: 'Downloading the Google Barcode Scanner module. Please wait...',
            color: 'blue',
            loading: true,
            autoClose: false,
          })

          await BarcodeScanner.removeAllListeners()

          await BarcodeScanner.addListener('googleBarcodeScannerModuleInstallProgress', (event) => {
            if (event.state === GoogleBarcodeScannerModuleInstallState.COMPLETED) {
              BarcodeScanner.removeAllListeners()
              notifications.update({
                id: 'barcode-install-toast',
                title: 'Scanner Ready',
                message: 'Google Barcode Scanner module installed successfully! Starting scan...',
                color: 'green',
                loading: false,
                autoClose: 3000,
              })
              run_native_scan()
            } else if (event.state === GoogleBarcodeScannerModuleInstallState.FAILED) {
              BarcodeScanner.removeAllListeners()
              notifications.update({
                id: 'barcode-install-toast',
                title: 'Installation Failed',
                message: 'Failed to install Google Barcode Scanner module.',
                color: 'red',
                loading: false,
                autoClose: 5000,
              })
            }
          })

          await BarcodeScanner.installGoogleBarcodeScannerModule()
          $_is_starting(false)
          return
        }
      }

      await run_native_scan()
    } catch (err: any) {
      console.error(err)
      $_error(error_get_message(err))
      $_is_scanning(false)
    } finally {
      $_is_starting(false)
    }
  }

  const handle_submit_barcode = () => {
    if (!$barcode_input.trim()) return
    mutation_scan.mutate($barcode_input.trim())
  }

  const handle_key_down = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handle_submit_barcode()
    }
  }

  useEffect(() => {
    return () => {
      BarcodeScanner.removeAllListeners()
    }
  }, [])

  return (
    <Center className="min-h-[70vh] w-full flex flex-col">
      <Stack gap="xl" align="center" className="max-w-[28rem] w-full text-center">
        <Stack gap="xs">
          <Text fw={800} fz="2rem" className="tracking-tight text-black leading-tight">
            Scan Barcode
          </Text>
          <Text size="sm" c="dimmed" className="font-medium">
            Point the camera at the product's barcode to scan it automatically.
          </Text>
        </Stack>

        <Box className="relative w-full rounded-[1.5rem] overflow-hidden bg-black shadow-lg min-h-[14rem]">
          {$is_scanning && (
            <Center className="absolute inset-0 bg-black flex-col gap-[0.5rem]">
              <div className="absolute left-[5%] right-[5%] h-[2px] bg-[#10b981] shadow-[0_0_8px_#10b981] animate-scan pointer-events-none z-10" />
              <Text size="sm" c="green" fw={500}>
                Scanning active natively...
              </Text>
            </Center>
          )}
          {!$is_scanning && (
            <Center className="absolute inset-0 bg-gray-100/90 flex-col gap-[0.5rem]">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-300"
              >
                <rect x="4" y="4" width="16" height="4" rx="2" fill="currentColor" />
                <rect x="4" y="4" width="4" height="16" rx="2" fill="currentColor" />
                <rect x="44" y="4" width="16" height="4" rx="2" fill="currentColor" />
                <rect x="56" y="4" width="4" height="16" rx="2" fill="currentColor" />
                <rect x="4" y="56" width="16" height="4" rx="2" fill="currentColor" />
                <rect x="4" y="44" width="4" height="16" rx="2" fill="currentColor" />
                <rect x="44" y="56" width="16" height="4" rx="2" fill="currentColor" />
                <rect x="56" y="44" width="4" height="16" rx="2" fill="currentColor" />
                <rect x="16" y="30" width="32" height="4" rx="2" fill="currentColor" />
              </svg>
              <Text size="sm" c="dimmed" fw={500}>
                Camera inactive
              </Text>
            </Center>
          )}
        </Box>

        {$error && (
          <Alert color="red" radius="md" id="scan-error-alert" className="text-left w-full">
            {$error}
          </Alert>
        )}

        <Button
          id="scan-camera-toggle"
          size="lg"
          radius="xl"
          loading={mutation_scan.isPending || $is_starting}
          onClick={handle_start_scan}
          className={$is_scanning ? '!bg-[#ef4444] font-semibold w-full' : '!bg-[#10b981] font-semibold w-full'}
          disabled={$is_scanning || !['android', 'ios'].includes(Capacitor.getPlatform())}
        >
          {!['android', 'ios'].includes(Capacitor.getPlatform())
            ? 'Scan not supported on Web'
            : $is_scanning
              ? 'Scanning...'
              : 'Start Scan'}
        </Button>

        <Divider label="or enter manually" labelPosition="center" className="w-full text-gray-400" />

        <Stack gap="xs" className="w-full">
          <TextInput
            placeholder="Scan/paste barcode, URL, or brand..."
            value={$barcode_input}
            onChange={(e) => {
              const val = e.currentTarget.value
              $_barcode_input(val)
              if (!val.trim()) {
                $_identify_result(null)
              }
            }}
            onKeyDown={handle_key_down}
            disabled={$is_scanning || mutation_scan.isPending}
            radius="1.25rem"
            size="md"
            classNames={{
              input: 'text-center font-semibold !text-[1rem]',
            }}
            rightSection={
              <ActionIcon
                size="2rem"
                radius="1rem"
                variant="subtle"
                className="text-[#10b981] hover:bg-emerald-50/50"
                onClick={async () => {
                  try {
                    const text = await navigator.clipboard.readText()
                    if (text) {
                      $_barcode_input(text.trim())
                      notifications.show({
                        title: 'Pasted from Clipboard',
                        message: text.trim(),
                        color: 'green',
                      })
                    }
                  } catch (err) {
                    notifications.show({
                      title: 'Paste Failed',
                      message: 'Please copy a barcode first.',
                      color: 'red',
                    })
                  }
                }}
              >
                <ClipboardIcon size="1.25rem" />
              </ActionIcon>
            }
          />
          <Button
            size="md"
            radius="1.25rem"
            onClick={handle_submit_barcode}
            loading={mutation_scan.isPending}
            disabled={!$barcode_input.trim() || $is_scanning}
            className="!bg-[#10b981] hover:!bg-emerald-600 font-semibold w-full"
          >
            Identify / Search
          </Button>
        </Stack>

        <Text
          size="xs"
          c="dimmed"
          className="font-medium bg-gray-50 border border-solid border-gray-100 rounded-full px-[1rem] py-[0.25rem]"
        >
          Supports EAN, UPC, URLs, and brand names
        </Text>

        {$identify_result?.boycott_search?.results && (
          <Stack gap="sm" className="w-full text-left mt-[1rem]">
            <Text fw={700} size="sm" c="dimmed" className="px-[0.25rem]">
              Search Results ({$identify_result.boycott_search.results.length})
            </Text>
            {$identify_result.boycott_search.results.length === 0 ? (
              <Card radius="md" padding="md" className="border border-solid border-gray-100 bg-gray-50/50 text-center">
                <Text size="sm" c="dimmed" fw={500}>
                  No matching boycott information found.
                </Text>
              </Card>
            ) : (
              $identify_result.boycott_search.results.map((result: any, idx: number) => {
                const is_boycott = result.decision_status === 'boycott'
                return (
                  <Card
                    key={idx}
                    radius="md"
                    padding="md"
                    className="border border-solid border-gray-100 hover:border-gray-200 transition-colors shadow-sm bg-white"
                  >
                    <Group gap="md" align="center" wrap="nowrap">
                      {is_boycott ? (
                        <div className="flex items-center justify-center h-12 w-12 rounded-[0.5rem] bg-red-50 text-red-600 border border-solid border-red-100 flex-shrink-0">
                          <ShieldWarningIcon size="1.75rem" />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-12 w-12 rounded-[0.5rem] bg-emerald-50 text-[#00c951] border border-solid border-emerald-100 flex-shrink-0">
                          <ShieldCheckIcon size="1.75rem" />
                        </div>
                      )}

                      <Stack gap="xs" className="flex-1 min-w-0">
                        <Group justify="space-between" align="center" wrap="nowrap">
                          <Text fw={700} size="md" className="truncate text-gray-800">
                            {result.brand_name}
                          </Text>

                          <Badge
                            color={is_boycott ? 'red' : 'emerald'}
                            variant="light"
                            radius="md"
                            styles={{
                              root: {
                                color: is_boycott ? '#ef4444' : '#10b981',
                                backgroundColor: is_boycott ? 'rgba(239,68,68,0.08)' : 'rgba(16,185,129,0.08)',
                              },
                            }}
                          >
                            {is_boycott ? 'Boycotted' : 'Safe'}
                          </Badge>
                        </Group>

                        {result.reason && (
                          <Text size="xs" c="dimmed" className="line-clamp-2">
                            {result.reason}
                          </Text>
                        )}

                        {result.campaign_name && (
                          <Group gap="xs" wrap="nowrap">
                            <Text size="xs" fw={700} c="dimmed" className="uppercase tracking-wider">
                              Campaign:
                            </Text>
                            <Badge size="xs" variant="outline" color="gray">
                              {result.campaign_name}
                            </Badge>
                          </Group>
                        )}
                      </Stack>
                    </Group>
                  </Card>
                )
              })
            )}
          </Stack>
        )}
      </Stack>
    </Center>
  )
}
