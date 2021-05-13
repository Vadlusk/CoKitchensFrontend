import React from 'react'
import PropTypes from 'prop-types'

import { Card, Typography, Divider } from '@material-ui/core'

const KitchenCard = (props) => {
  return (
    <>
      <Card key={props.name} />
        <Typography variant="h3">{props.name}</Typography>
        <Divider />
        <Typography variant="h6">{props.description}</Typography>
      <Card />
    </>
  )
}

export default KitchenCard

KitchenCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string
}
