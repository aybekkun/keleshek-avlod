import type { ICategory } from '../category/category.types'

export type INews = {
  id: number
  title: string
  content: string
  category: ICategory | null
  image: string
  created_at: string
  updated_at: string
}

export type INewsForm = {
  title_en: string
  title_ru: string
  title_uz: string
  title_kaa: string
  content_en: string
  content_ru: string
  content_uz: string
  content_kaa: string
  category_id: number | null
  image: File | string | null
}

export type INewsUpdate = INewsForm & {
  id: number
}
