export type IClub = {
  id: number
  title: string
  image: string | null
  age: string
  days: number[]
  index: number
  time: string
  created_at: string
  updated_at: string
}

export type IClubForm = {
  title_en: string
  title_ru: string
  title_uz: string
  title_kaa: string
  image: File | string | null
  age: string
  days: number[]
  index?: number
  time: string
}

export type IClubUpdate = IClubForm & {
  id: number
}
