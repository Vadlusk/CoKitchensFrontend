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

    const leadership = rawTeamMembers.filter(teamMember => teamMember.role === 'Co-Director')
    const advisors = rawTeamMembers.filter(teamMember => teamMember.role === 'Advisor')
    const communityRegenerators = rawTeamMembers.filter(teamMember => (teamMember.role !== 'Co-Director') && (teamMember.role !== 'Advisor'))

    setTeamMembers({ leadership, advisors, communityRegenerators })
    setAreTeamMembersLoaded(true)
  }, [])

  return { teamMembers, areTeamMembersLoaded }
}

export default useTeamMembers
