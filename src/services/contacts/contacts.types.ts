export interface IContact {
  id: number
  address: string
  phone: string
  email: string
  lat: string
  long: string
}

export interface IContactForm {
  address: string
  phone: string
  email: string
  lat: string
  long: string
  mapUrl?: string // for the form input
}

export interface IContactMessage {
  id: number
  name: string
  phone: string
  message: string
  is_seen: boolean
  created_at: string
}
