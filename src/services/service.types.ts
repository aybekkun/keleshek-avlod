import type { AxiosError } from 'axios'
// import type { ICourse } from './course'
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
  role?: number
  name?: string
  ordering?:
    | '-created_at'
    | 'first_name'
    | 'last_name'
    | 'phone'
    | 'role'
    | 'index'
    | '-date'
    | 'date'
  last_name?: string
  teacher_id?: number
  category?: number | string
}

export type ResponseError = AxiosError<{
  message?: string
  errors?: Array<string>
}>
