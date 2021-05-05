import { useState, useEffect } from 'react'

import { getTeamMembers } from '../services'

const useTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState({
    leadership: [],
    advisors: [],
    communityRegenerators: []
  })
  const [areTeamMembersLoaded, setAreTeamMembersLoaded] = useState(false)

  useEffect(async () => {
    const rawTeamMembers = await getTeamMembers()

    setTeamMembers(rawTeamMembers)
    setAreTeamMembersLoaded(true)
  }, [])

  return { teamMembers, areTeamMembersLoaded }
}

export default useTeamMembers
