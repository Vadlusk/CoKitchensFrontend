import React from 'react'
import TeamCard from '../../components/TeamCard'
import TitleBanner from '../../components/TitleBanner'

import { Typography } from '@material-ui/core'

import useTeamMembers from '../../hooks/useTeamMembers'

const Team = () => {
  const { teamMembers } = useTeamMembers()

  return (
    <>
      <TitleBanner>Stewards of this Platform</TitleBanner>
      <Typography>
        {teamMembers.stewards.map(steward => // shuffle these everytime
          <>
            <TeamCard key={steward.name} img={steward.img} name={steward.name} description={steward.description} role={steward.role}></TeamCard>
          </>
        )}
      </Typography>
      <TitleBanner>Advisors</TitleBanner>
      <Typography>
        {teamMembers.advisors.map(advisor => // shuffle these everytime
          <>
            <TeamCard key={advisor.name} img={advisor.img} name={advisor.name} description={advisor.description} role={advisor.role}></TeamCard>
          </>
        )}
      </Typography>
      <TitleBanner>Community Regenerators</TitleBanner>
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
