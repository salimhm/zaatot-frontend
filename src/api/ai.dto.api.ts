export interface dto_api_ai {
  analyze: {
    query: Record<string, never>
    body: {
      prompt: string
      user_id: number
    }
    response: Response
  }
}
