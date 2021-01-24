import axios from 'axios'
import store from 'store'
import { notification } from 'ant-design-vue'

const apiClient = axios.create({
  baseURL: 'http://localhost:8081/',
  // baseURL: 'http://185.196.214.66:8080/api/',
  // timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' }
})

apiClient.interceptors.request.use(request => {
  const accessToken = store.get('accessToken')
  if (accessToken) {
    request.headers.Authorization = `${accessToken}`
    // request.headers.AccessToken = accessToken
  }
  return request
})

apiClient.interceptors.response.use(undefined, error => {
  // Errors handling
  const { response } = error
  const { data } = response
  if (data) {
    notification.warning({
      message: data,
    })
  }
})

export default apiClient
