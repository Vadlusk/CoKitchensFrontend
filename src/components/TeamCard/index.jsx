import React from 'react'
import PropTypes from 'prop-types'

import { Card, CardActionArea, CardContent, CardMedia, Typography, Divider } from '@material-ui/core'

const TeamCard = (props) => {
  return (
    <Card style={{ width: '300px', margin: '20px', display: 'inline-block', verticalAlign: 'middle' }}>
      <CardActionArea>
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image={props.img}
          title={props.name}
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Divider light />
          <Typography align="center" style={{ padding: '15px 0' }}>
            {props.role}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ paddingBottom: '15px' }}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default TeamCard

TeamCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  role: PropTypes.string
}
