const environment = 'development'

const url = () => environment === 'development' ? 'http://localhost:3001' : null

export default {
  apiKey: 'secret_id_you_dont_know',
  url
}
