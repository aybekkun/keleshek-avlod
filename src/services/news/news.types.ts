import type { ICategory } from '../category/category.types'

export type INews = {
  id: number
  title: string
  content: string
  category: ICategory | null
  image: string
  created_at: string
  updated_at: string
  related_news: Omit<INews, 'related_news'>[]
}
