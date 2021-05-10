import { useState, useEffect } from 'react'

import { getTeamMembers } from '../services'

const useTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState({
    stewards: [],
    advisors: [],
    communityRegenerators: []
  })
  const [areTeamMembersLoaded, setAreTeamMembersLoaded] = useState(false)

  useEffect(async () => {
    const rawTeamMembers = await getTeamMembers()

    const stewards = rawTeamMembers.filter(teamMember => teamMember.role === 'Platform Steward')
    const advisors = rawTeamMembers.filter(teamMember => teamMember.role === 'Advisor')
    const communityRegenerators = rawTeamMembers.filter(teamMember => (teamMember.role !== 'Platform Steward') && (teamMember.role !== 'Advisor'))

    setTeamMembers({ stewards, advisors, communityRegenerators })
    setAreTeamMembersLoaded(true)
  }, [])

  return { teamMembers, areTeamMembersLoaded }
}

export default useTeamMembers
