export type IGallery = {
  id: number
  title: string
  image: string
  created_at: string
  updated_at: string
}

export type IGalleryForm = {
  title_en: string
  title_ru: string
  title_uz: string
  title_kaa: string
  image: File | string | null
}

export type IGalleryUpdate = IGalleryForm & {
  id: number
}
