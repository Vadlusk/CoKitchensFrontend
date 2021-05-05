import React from 'react'

import useTeamMembers from '../../hooks/useTeamMembers'

const Team = () => {
  const { teamMembers } = useTeamMembers()

  return (
    <>
    <h1>team</h1>

    {teamMembers.leadership.forEach(leader => <div>Leader</div>)}
    {teamMembers.advisors.forEach(advisor => <div>Advisor</div>)}
    {teamMembers.communityRegenerators.forEach(regenerator => <div>Regenerator</div>)}
    </>
  )
}

export default Team
