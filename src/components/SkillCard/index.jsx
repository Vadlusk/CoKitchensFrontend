import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '@material-ui/core'

const SkillCard = (props) => {
  return (
   <>
     <Card
       style={{
         display: 'inline-block',
         padding: '5px',
         margin: '5px 5px 0 0'
       }}
       elevation={3}
     >{props.skill}</Card>
   </>
  )
}

export default SkillCard

SkillCard.propTypes = {
  skill: PropTypes.string
}
