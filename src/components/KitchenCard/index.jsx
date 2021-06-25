import React from 'react'
import PropTypes from 'prop-types'
import { Card, Typography, CardMedia, CardContent, CardHeader, Divider, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    maxWidth: '1300px',
    margin: '30px',
    borderBottom: '1px solid black'
  },
  cardHeader: {
    padding: '20px'
  },
  kitchenImgDescriptionContainer: {
    padding: '20px',
    paddingBottom: '40px',
    textAlign: 'center'
  },
  kitchenImage: {
    height: '300px',
    margin: '0px auto',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      width: '90%'
    },
    [theme.breakpoints.up('md')]: {
      display: 'inline-block',
      width: '45%'
    }
  },
  kitchenDescription: {
    verticalAlign: 'top',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      width: '90%'
    },
    [theme.breakpoints.up('md')]: {
      display: 'inline-block',
      width: '45%'
    }
  },
  kitchenDescriptionContainer: {
    textAlign: 'center'
  },
  kitchenSubtitle: {
    paddingBottom: '20px'
  }
}))

const KitchenCard = (props) => {
  const classes = useStyles()

  const kitchenTitle = `CoKitchen - ${props.name}, ${props.locationName}`

  return (
    <>
      <Card className={classes.cardContainer} elevation={0}>
        <CardHeader
         title={kitchenTitle}
         className={classes.cardHeader}
        />
        <Divider />
        <div className={classes.kitchenImgDescriptionContainer}>
          <CardMedia
            className={classes.kitchenImage}
            image={props.img}
            title={props.name}
          />
          <CardContent className={classes.kitchenDescription}>
            <Box className={classes.kitchenDescriptionContainer}>
              <Typography
                variant="subtitle1"
                className={classes.kitchenSubtitle}
              >
                <b>CoKitchen Facilitators:</b> Connor Harron, Benji Ross, Max McFarland
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
              >
                {props.description}
              </Typography>
            </Box>
           </CardContent>
        </div>
       </Card>
     </>
  )
}

export default KitchenCard

KitchenCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  locationName: PropTypes.string
}
