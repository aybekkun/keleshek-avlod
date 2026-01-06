export type IEvent = {
  id: number
  title: {
    kaa: string | null
    uz: string | null
    en: string | null
    ru: string | null
  }
  sub_title: {
    kaa: string | null
    uz: string | null
    en: string | null
    ru: string | null
  }
  date: string
  from_time: string
  to_time: string
  location: string
  created_at: string
  updated_at: string
}

export type IEventForm = {
  title_kaa: string
  title_uz: string
  title_en: string
  title_ru: string
  sub_title_kaa: string
  sub_title_uz: string
  sub_title_en: string
  sub_title_ru: string
  date: string
  from_time: string
  to_time: string
  location: string
}

export type IEventUpdate = IEventForm & {
  id: number
}
