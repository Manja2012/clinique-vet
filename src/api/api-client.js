import axios from 'axios'
import config from '../config'
import { appointmentsRoute, contactsRoute, reviewsRoute } from './routes'

const apiClient = axios.create({
  baseURL: config.apiBaseUrl
})

export default apiClient

export const getReviews = () => apiClient.get(reviewsRoute)

export const getAppointment = id => apiClient.get(`${appointmentsRoute}/${id}`)
export const getAppointments = () => apiClient.get(appointmentsRoute)
export const saveAppointment = appointment => apiClient.post(appointmentsRoute, appointment)

export const sendMessage = contact => apiClient.post(contactsRoute, contact)