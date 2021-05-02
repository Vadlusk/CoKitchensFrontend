import { useLocation } from 'react-router-dom'

const useSearchParams = (key) => (
  new URLSearchParams(useLocation().search).get(key)
)

export default useSearchParams
