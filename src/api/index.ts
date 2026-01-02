import axios from 'axios'

const _API_KEY = import.meta.env.VITE_API_KEY
const _API_ADMIN_KEY = import.meta.env.VITE_API_ADMIN_KEY
const $authHost = axios.create({
  baseURL: _API_KEY,
})

const $host = axios.create({
  baseURL: _API_KEY,
})

const $api = axios.create({
  baseURL: _API_ADMIN_KEY,
})

$authHost.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  config.headers.Authorization = `Bearer ${token ?? ''}`

  return config
})

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  config.headers.Authorization = `Bearer ${token ?? ''}`

  return config
})

export { $host, $authHost, $api }
