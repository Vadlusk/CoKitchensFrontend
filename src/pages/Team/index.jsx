import React from 'react'
import { Typography } from '@material-ui/core'

import TeamCard from '../../components/TeamCard'
import blueSkyTreeBackground1 from './Assets/blue_sky_tree.png'
import blueSkyTreeBackground2 from './Assets/blue_sky_tree_2.png'
import blueSkyTreeBackground3 from './Assets/blue_sky_tree_3.png'

import useTeamMembers from '../../hooks/useTeamMembers'
import styled from 'styled-components'

const Team = () => {
  const { teamMembers } = useTeamMembers()

  return (
    <>
      <S.BackgroundImageWrapper>
        <S.BackgroundImgage1></S.BackgroundImgage1>
      </S.BackgroundImageWrapper>
      <Typography style={{ padding: '20px 0 0 20px', fontSize: '1.75rem', fontWeight: '800' }}>Stewards of the Platform</Typography>
      <Typography>
        {teamMembers.stewards.map(steward => // shuffle these everytime
          <>
            <TeamCard key={steward.name} img={steward.img} name={steward.name} description={steward.description} role={steward.role}></TeamCard>
          </>
        )}
      </Typography>
      <S.BackgroundImageWrapper>
        <S.BackgroundImgage2></S.BackgroundImgage2>
      </S.BackgroundImageWrapper>
      <Typography style={{ padding: '20px 0 0 20px', fontSize: '1.75rem', fontWeight: '800' }}>Advisors</Typography>
      <Typography>
        {teamMembers.advisors.map(advisor => // shuffle these everytime
          <>
            <TeamCard key={advisor.name} img={advisor.img} name={advisor.name} description={advisor.description} role={advisor.role}></TeamCard>
          </>
        )}
      </Typography>
      <S.BackgroundImageWrapper>
        <S.BackgroundImgage3></S.BackgroundImgage3>
      </S.BackgroundImageWrapper>
      <Typography style={{ padding: '20px 0 0 20px', fontSize: '1.75rem', fontWeight: '800' }}>Community Regenerators</Typography>
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

const S = {
  BackgroundImageWrapper: styled.div`
  position: relative;
  width: 1450px;
  height: 100px;
  `,
  BackgroundImgage1: styled.div`
  background-image: url(${blueSkyTreeBackground1});
  width: 100%;
  height: 100px;
  background-size: cover; /* or contain depending on what you want */
  background-position: center center;
  background-repeat: no-repeat;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
  `,
  BackgroundImgage2: styled.div`
  background-image: url(${blueSkyTreeBackground2});
  width: 100%;
  height: 100px;
  background-size: cover; /* or contain depending on what you want */
  background-position: center center;
  background-repeat: no-repeat;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
  `,
  BackgroundImgage3: styled.div`
  background-image: url(${blueSkyTreeBackground3});
  width: 100%;
  height: 100px;
  background-size: cover; /* or contain depending on what you want */
  background-position: center center;
  background-repeat: no-repeat;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
  `
}

export default Team
