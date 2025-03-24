import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('Error response:', error.response.data)
      if (error.response.status === 401) {
        console.error('Unauthorized')
      } else if (error.response.status === 403) {
        console.error('Forbidden')
      } else if (error.response.status === 404) {
        console.error('Not Found')
      }
    } else if (error.request) {
      console.error('Error request:', error.request)
    } else {
      console.error('Error message:', error.message)
    }
    return Promise.reject(error)
  },
)

export default api