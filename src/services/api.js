const fetchAPI = (path, method = 'GET', payload = null) => {
  const body = payload ? JSON.stringify(payload) : null

  return fetch(`${process.env.REACT_APP_BASE_BACKEND_URL}${'/api/v1' + path}`, {
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
