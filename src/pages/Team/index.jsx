import React from 'react'
import TeamCard from '../../components/TeamCard'
import TeamRoleBanner from '../../components/TeamRoleBanner'

import { Typography } from '@material-ui/core'

import useTeamMembers from '../../hooks/useTeamMembers'

const Team = () => {
  const { teamMembers } = useTeamMembers()

  return (
    <>
      <TeamRoleBanner role='Stewards of this Platform'></TeamRoleBanner>
      <Typography>
        {teamMembers.stewards.map(steward => // shuffle these everytime
          <>
            <TeamCard key={steward.name} img={steward.img} name={steward.name} description={steward.description} role={steward.role}></TeamCard>
          </>
        )}
      </Typography>
      <TeamRoleBanner role='Advisors'></TeamRoleBanner>
      <Typography>
        {teamMembers.advisors.map(advisor => // shuffle these everytime
          <>
            <TeamCard key={advisor.name} img={advisor.img} name={advisor.name} description={advisor.description} role={advisor.role}></TeamCard>
          </>
        )}
      </Typography>
      <TeamRoleBanner role='Community Regenerators'></TeamRoleBanner>
      <Typography>
        {teamMembers.communityRegenerators.map(regenerator => // shuffle these everytime
          <>
            <TeamCard key={regenerator.name} img={regenerator.img} name={regenerator.name} description={regenerator.description} role={regenerator.role}></TeamCard>
          </>
        )}
      </Typography>
    </>
  )
}

export default Team
