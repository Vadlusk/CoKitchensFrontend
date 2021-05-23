import React from 'react'
import PropTypes from 'prop-types'
// import BlueCardBackground from './Assets/blue-card.png'
import BrownCardBackground from './Assets/brown-card.png'

import { Card, Typography, CardContent, CardHeader, CardMedia } from '@material-ui/core'

const ElementCard = (props) => {
  return (
    <>
      <Card
        style={{
          padding: '25px 5px',
          display: 'inline-block',
          width: '500px',
          height: '400px',
          margin: '20px',
          backgroundImage: `url(${BrownCardBackground})`,
          backgroundSize: 'cover',
          color: 'white'
        }} elevation={5}
      >
        <CardMedia
          style={{ height: '200px', width: '95%', margin: '0px auto' }}
          image={props.img}
          title={props.name}
        />
        <CardHeader
         style={{
           textAlign: 'center'
         }}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
              textAlign: 'center',
              color: 'white'
            }}
          >
            {props.description}
          </Typography>
         </CardContent>
       </Card>
     </>
  )
}

export default ElementCard

ElementCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string
}
