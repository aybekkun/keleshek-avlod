export type IAuthForm = {
  phone: string
  password: string
}

export type ILoginResonse = {
  id: number
  first_name: string
  last_name: string
  role: {
    id: number
    name: string
  }
  token: string
}

export type IUserProfile = {
  id: number
  first_name: string
  last_name: string
  full_name: string
  role: {
    id: number
    name: string
  }
  phone: string
  avatar: string | null
  bio: string
  is_verified: boolean
}
