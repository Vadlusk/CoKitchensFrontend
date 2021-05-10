import React from 'react'
import TeamCard from '../../components/TeamCard'

import { Typography, Divider } from '@material-ui/core'

import useTeamMembers from '../../hooks/useTeamMembers'

const bannerColor = '#307351' // TODO: make primary, secondary... colors
const bannerTextColor = 'white'

const Team = () => {
  const { teamMembers } = useTeamMembers()

  return (
    <>
      <Typography variant="h4" align="center" style={{ padding: '30px 0', color: bannerTextColor, background: bannerColor }}>Stewards of this Commons</Typography>
      <Divider />
      <Typography>
        {teamMembers.stewards.map(steward => // shuffle these everytime
          <>
            <TeamCard key={steward.name} img={steward.img} name={steward.name} description={steward.description} role={steward.role}></TeamCard>
          </>
        )}
      </Typography>
      <Divider />
      <Typography variant="h4" align="center" style={{ padding: '30px 0', color: bannerTextColor, background: bannerColor }}>Advisors</Typography>
      <Divider />
      <Typography>
        {teamMembers.advisors.map(advisor => // shuffle these everytime
          <>
            <TeamCard key={advisor.name} img={advisor.img} name={advisor.name} description={advisor.description} role={advisor.role}></TeamCard>
          </>
        )}
      </Typography>
      <Divider />
      <Typography variant="h4" align="center"style={{ padding: '30px 0', color: bannerTextColor, background: bannerColor }}>Community Regenerators</Typography>
      <Divider />
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
