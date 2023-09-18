import { appointmentsRoute } from '../api/routes.js'
import apiClient from '../api/api-client.js'

export const saveAppointment = appointment => apiClient(appointmentsRoute, {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(appointment)}
)
