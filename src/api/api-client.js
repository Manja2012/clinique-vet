import axios from 'axios'
import config from '../config'
import { appointmentsRoute, contactsRoute, reviewsRoute } from './routes'

const apiClient = axios.create({
  baseURL: config.apiBaseUrl
})

export default apiClient

export const getReviews = () => apiClient.get(reviewsRoute)

export const getAppointment = id => apiClient.get(`${appointmentsRoute}/${id}`)
export const getAppointments = async () => {
  const token = localStorage.getItem('token')
  if (token) {
    const response = await apiClient.get(appointmentsRoute, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }
  throw new Error('Unauthorized')
}
export const saveAppointment = appointment => apiClient.post(appointmentsRoute, appointment)

export const sendMessage = contact => apiClient.post(contactsRoute, contact)

export const signIn = async (email, password) => {
  const response = await apiClient.post('/auth/tokens', {
    email,
    password,
  })
  
  localStorage.setItem('token', response.data.accessToken)
}

export const removeAppointment = async (id) => {
  const token = localStorage.getItem('token') 
  if (token) {
    const response = await apiClient.delete(`${appointmentsRoute}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }
  throw new Error('Unauthorized')   
}

export const updateAppointment = async (appointment) => {
  const token = localStorage.getItem('token') 
  if (token) {
    const response = await apiClient.put(`${appointmentsRoute}/${appointment._id}`, appointment, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }
  throw new Error('Unauthorized')   
}