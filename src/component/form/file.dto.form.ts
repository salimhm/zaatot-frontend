export namespace dto_form_file {
  export interface props {
    onSuccess: (data: { file_id: string; file_name: string }) => void
    label?: string
    accept?: string
    multiple?: boolean
  }
}
