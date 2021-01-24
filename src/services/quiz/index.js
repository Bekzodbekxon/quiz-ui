import apiClient from '@/services/axios'

export async function getQuizByProjectId(id) {
  return apiClient
    .get('/api/quiz/' + id)
    .then(response => {
      debugger
      if (response && response.status === 200) {
        debugger
        return response.data
      }
      return []
    })
    .catch(err => console.log(err))
}
