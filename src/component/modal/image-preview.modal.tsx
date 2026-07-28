import { Modal, Image, Box, CloseButton } from '@mantine/core'
import type { dto_modal_image_preview } from '@modal/image-preview.dto.modal'

export default function ModalImagePreview({
  opened,
  on_close,
  src,
  alt = 'Image preview',
}: dto_modal_image_preview['in']): dto_modal_image_preview['out'] {
  return (
    <Modal
      opened={opened}
      onClose={on_close}
      centered
      size="auto"
      withCloseButton={false}
      padding={0}
      styles={{
        content: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
        body: {
          padding: 0,
          position: 'relative',
        },
      }}
    >
      <Box className="relative max-w-full max-h-full flex items-center justify-center p-[1rem]">
        <Image src={src} alt={alt} fit="contain" className="max-w-full max-h-[90vh] rounded-[0.5rem] object-contain" />
      </Box>
    </Modal>
  )
}
