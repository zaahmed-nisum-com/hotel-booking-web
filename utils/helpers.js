import { CONSTANTS } from '../config/constants'

const helpers = {}

helpers.apiHelper = async (
  path,
  url,
  method = 'GET',
  body = null,
  authorization = null
) => {
  try {
    let apiUrl = url

    if (!apiUrl) {
      apiUrl = CONSTANTS.BASE_URL + path
    }
    const headers = {}

    if (authorization) {
      headers.authorization = authorization
    }

    if (method !== 'GET') {
      headers['Content-Type'] = 'application/json'
    }

    const options = {
      method,
      headers,
    }

    if (body) {
      options['body'] = JSON.stringify(body)
    }
    const response = await fetch(apiUrl, options)
    const json = await response.json()
    if (response.status !== 200) {
      throw new Error(json.message)
    }
    return await json
  } catch (error) {
    throw error
  }
}
