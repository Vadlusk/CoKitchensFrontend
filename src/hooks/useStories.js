import { useState, useEffect } from 'react'

import { getStories } from '../services'

const useStories = () => {
  const [stories, setStories] = useState([])
  const [areStoriesLoaded, setAreStoriesLoaded] = useState(false)

  useEffect(async () => {
    const stories = await getStories()

    setStories(stories)
    setAreStoriesLoaded(true)
  }, [])

  return { stories, areStoriesLoaded }
}

export default useStories
