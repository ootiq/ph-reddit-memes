import { getter } from './getter'
import { jsonResponse } from './wrapper'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const r = await getter()

  return jsonResponse(200, r)
}
