import React from 'react'
import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core'

const TeamRoleBanner = (props) => {
  return (
    <Typography
      variant="h4"
      align="center"
      style={{
        width: '98%',
        padding: '15px 0',
        color: 'white',
        background: '#307351',
        minWidth: '400px',
        border: '2px solid black',
        margin: '10px auto'
      }}
    >
      {props.role}
    </Typography>
  )
}

export default TeamRoleBanner

TeamRoleBanner.propTypes = {
  role: PropTypes.string
}
