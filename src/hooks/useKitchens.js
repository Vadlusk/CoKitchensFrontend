import { useState, useEffect } from 'react'

import { getKitchens } from '../services'

const useKitchens = () => {
  const [kitchens, setKitchens] = useState([])
  const [areKitchensLoaded, setAreKitchensLoaded] = useState(false)

  useEffect(async () => {
    const kitchens = await getKitchens()

    setKitchens(kitchens)
    setAreKitchensLoaded(true)
  }, [])

  return { kitchens, areKitchensLoaded }
}

export default useKitchens
