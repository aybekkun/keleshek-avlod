import type { ResponseError } from '@/services/service.types'

export const errorCatch = (error: ResponseError) => {
  if (
    error.response?.data?.errors &&
    Array.isArray(error.response?.data?.errors)
  ) {
    return JSON.stringify(error.response?.data?.errors)
  }
  if (error.response?.data?.message) {
    return JSON.stringify(error.response?.data?.message)
  }
  return 'Error'
}
