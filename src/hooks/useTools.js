import { useState, useEffect } from 'react'

import { getTools } from '../services'

const useTools = () => {
  const [tools, setTools] = useState([])
  const [areToolsLoaded, setAreToolsLoaded] = useState(false)

  useEffect(async () => {
    const tools = await getTools()

    setTools(tools)
    setAreToolsLoaded(true)
  }, [])

  return { tools, areToolsLoaded }
}

export default useTools
