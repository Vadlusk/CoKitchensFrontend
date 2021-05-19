import React from 'react'
import PropTypes from 'prop-types'
import ElementCardBackground from './Assets/element-card-background.png'

import { Card, Typography, CardContent, CardHeader } from '@material-ui/core'

const ElementCard = (props) => {
  return (
    <>
      <Card style={{
        padding: '25px 5px',
        display: 'inline-block',
        width: '300px',
        height: '300px',
        margin: '20px',
        backgroundImage: `url(${ElementCardBackground})`,
        backgroundSize: 'cover',
        color: 'white'
      }} elevation={5}>
        <div
          style={{
            textAlign: 'center'
          }}
        >{props.titleImage}</div>
        <CardHeader
         style={{
           textAlign: 'center'
         }}
         title={props.title}
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
            {props.children}
          </Typography>
         </CardContent>
       </Card>
     </>
  )
}

export default ElementCard

ElementCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  titleImage: PropTypes.element,
  children: PropTypes.string
}
