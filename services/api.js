import { create } from 'apisauce'

const api = create({
  baseURL: 'https://knautiluz.com/api',
  headers: { Accept: 'application/json' }
})

export default api