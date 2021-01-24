import apiClient from '@/services/axios'

export function list() {
  return apiClient
    .get('/api/project/list')
    .then(response => {
      if (response && response.status === 200) {
        return response.data
      }
      return []
    })
    .catch(err => console.log(err))
}
