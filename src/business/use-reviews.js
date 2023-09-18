import { reviewsRoute } from '../api/routes.js'
import apiClient from '../api/api-client.js'

export const useReviews = review => apiClient(reviewsRoute, {
  method: 'GET',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(review)}
)
