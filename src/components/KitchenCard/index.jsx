import React from 'react'
import PropTypes from 'prop-types'

import { Card, Typography, CardMedia, CardContent, CardHeader } from '@material-ui/core'

const KitchenCard = (props) => {
  return (
    <>
      <Card style={{ maxWidth: '1300px', margin: '30px' }} elevation={3}>
        <CardHeader
         title={props.name}
         style={{ paddingBottom: '3px', paddingLeft: '20px' }}
        />
        <Typography variant="body2" color="textSecondary" component="p">
          {props.location_name}
        </Typography>
        <CardMedia
          style={{ height: '300px', width: '95%', margin: '0px auto' }}
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
  description: PropTypes.string,
  location_name: PropTypes.string
}
