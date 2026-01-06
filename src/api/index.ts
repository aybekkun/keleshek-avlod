import axios from 'axios'

const _API_KEY = import.meta.env.VITE_API_KEY
/* const _API_ADMIN_KEY = import.meta.env.VITE_API_ADMIN_KEY
const $authHost = axios.create({
  baseURL: _API_KEY,
})
 */
/* const $host = axios.create({
  baseURL: _API_KEY,
})
 */
const $authApi = axios.create({
  baseURL: _API_KEY,
})

/* $authHost.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  config.headers.Authorization = `Bearer ${token ?? ''}`

  return config
})
 */
$authApi.interceptors.request.use((config) => {
  const currentLanguage =
    (localStorage.getItem('lang') ?? 'kaa').split('-')[0] || 'kaa'

  config.headers['Accept-Language'] = currentLanguage

  return config
})

export { $authApi }
