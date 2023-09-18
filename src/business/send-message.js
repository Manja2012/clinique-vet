import { contactsRoute } from '../api/routes.js'
import apiClient from '../api/api-client.js'

export const sendMessage = contact => apiClient(contactsRoute, {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(contact)}
)