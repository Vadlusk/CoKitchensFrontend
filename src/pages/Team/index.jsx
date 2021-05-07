import React from 'react'

import './styles.css'

import useTeamMembers from '../../hooks/useTeamMembers'

const Team = () => {
  const { teamMembers } = useTeamMembers()

  return (
    <>
    <h1>Team</h1>
    <h1>Leadership</h1>
    <div className="cardDeck">
    {teamMembers.leadership.length &&
      teamMembers.leadership.map(leader =>
          <>
          <div className="card">
            <img className="cardImage" src={leader.img}></img>
            <h1 className="cardName" key={leader.name}>{leader.name}</h1>
            <div className="cardNameDescription">
              <p className="cardDescription">{leader.description}</p>
            </div>
          </div>
          </>
      )}

      </div>
    {teamMembers.advisors.forEach(advisor => <div>Advisor</div>)}
    <h1>Community Regenerators</h1>
    <div className="cardDeck">
    {teamMembers.communityRegenerators.length &&
      teamMembers.communityRegenerators.map(communityRegenerator =>
          <>
          <div className="card">
            <img className="cardImage" src={communityRegenerator.img}></img>
            <h1 className="cardName" key={communityRegenerator.name}>{communityRegenerator.name}</h1>
            <div className="cardNameDescription">
              <p className="cardDescription">{communityRegenerator.description}</p>
            </div>
          </div>
          </>
      )}

      </div>
    </>
  )
}

export default Team
