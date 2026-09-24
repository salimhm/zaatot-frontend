export interface dto_api_ai {
  analyze: {
    query: Record<string, never>
    body: {
      promot: string
      user_id: number
    }
    response: {
      data: {
        execution_id: string
        status: string
        product: any | null
        assessments: any[]
        alternatives: any[]
        explanation: string | null
        sources: any[]
        limitations: string[]
      }
    }
  }
}
