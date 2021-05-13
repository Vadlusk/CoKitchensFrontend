import React from 'react'
import PropTypes from 'prop-types'

import { Card, Typography, CardMedia, CardContent, CardHeader } from '@material-ui/core'

const KitchenCard = (props) => {
  return (
    <>
      <Card style={{ maxWidth: '800px', margin: '30px' }} key={props.name} elevation={3}>
        <CardHeader
         title={props.name}
        />
        <CardMedia
          style={{ height: '300px', width: '95%', margin: '20px auto' }}
          image={props.img}
          title={props.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
         </CardContent>
       </Card>
     </>
  )
}

export default KitchenCard

KitchenCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string
}
