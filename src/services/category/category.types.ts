export type ICategory = {
  id: number
  name: string
  index: number
}

export type ICategoryForm = {
  name_kaa: string
  name_uz: string
  name_en: string
  name_ru: string
  index?: number
}

export type ICategoryUpdate = ICategoryForm & {
  id: number
}
