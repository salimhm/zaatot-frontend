import { Modal, Stack, Text, Button, Group } from '@mantine/core'
import type { dto_modal_confirmation } from '@modal/confirmation.dto.modal'

export default function ModalConfirmation({
  opened,
  on_close,
  on_confirm,
  title = 'Are you sure?',
  message = 'This action cannot be undone. Please confirm to proceed.',
  loading = false,
  confirm_label = 'Delete',
  confirm_color = 'red',
}: dto_modal_confirmation['in']): dto_modal_confirmation['out'] {
  return (
    <Modal opened={opened} onClose={on_close} title={<Text fw={700}>{title}</Text>} centered radius="lg" size="sm">
      <Stack gap="md">
        <Text size="sm">{message}</Text>
        <Group justify="flex-end" gap="sm">
          <Button variant="light" color="gray" onClick={on_close} disabled={loading} radius="xl">
            Cancel
          </Button>
          <Button color={confirm_color} onClick={on_confirm} loading={loading} radius="xl">
            {confirm_label}
          </Button>
        </Group>
      </Stack>
    </Modal>
  )
}
