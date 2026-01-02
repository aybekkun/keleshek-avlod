import type { AxiosError } from 'axios'

export type IPagination = {
  count: number
  next: string | null
  previous: string | null
}

export type IResponseData<T> = {
  data: Array<T>
  pagination: IPagination
}

export type IResponseSingleData<T> = {
  data: T
}

export type IParams = {
  id?: string | number
  page?: number
  is_add?: boolean
  limit?: number

}

export type ResponseError = AxiosError<{
  message?: string
  errors?: Array<string>
}>
