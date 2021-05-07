import config from './config'

const fetchAPI = (path, method = 'GET', payload = null) => {
  const body = payload ? JSON.stringify(payload) : null

  return fetch(`${config.url}${'/api/v1' + path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body
  })
    .then(response => response.json())
}

export default fetchAPI
