import React from 'react'
import PropTypes from 'prop-types'

import { Card, Typography, CardMedia, CardContent, CardHeader } from '@material-ui/core'

const ToolCard = (props) => {
  return (
    <>
      <Card style={{
        maxWidth: '500px',
        minHeight: '500px',
        margin: '30px',
        display: 'inline-block',
        verticalAlign: 'top'
      }} elevation={3}>
        <CardHeader
         title={props.name}
         style={{ paddingBottom: '3px', paddingLeft: '20px' }}
        />
        {props.img &&
          <CardMedia
            style={{ height: '200px', width: '95%', margin: '0px auto' }}
            image={props.img}
            title={props.name}
          />
        }

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
         </CardContent>
       </Card>
     </>
  )
}

export default ToolCard

ToolCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string
}
