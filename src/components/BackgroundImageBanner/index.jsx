import React from 'react'
import PropTypes from 'prop-types'
import { Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  overlayContentContainer: {
    position: 'absolute',
    zIndex: '1',
    [theme.breakpoints.down('md')]: {
      padding: '10px',
      margin: '10px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '40px',
      margin: '0 40px'
    }
  },
  overlayContentContainerText: {
    textAlign: 'center'
  },
  overlayContentContainerImage: {
    width: '100%',
    backgroundSize: 'cover',
    position: 'absolute',
    top: '0',
    left: '0',
    borderBottom: '4px solid black'
  }
}))

const BackgroundImageBanner = (props) => {
  const classes = useStyles()

  const renderOverlayContent = () => {
    if (props.content) {
      return (
        <Card className={classes.overlayContentContainer}
          style={{
            top: props.top,
            color: props.fontColor,
            background: props.backgroundColor
          }}
          elevation={3}
        >
          <Typography variant="h2" className={classes.overlayContentContainerText}>
            {props.content}
          </Typography>
        </Card>
      )
    }
  }

  return (
   <>
     <div style={{
       position: 'relative',
       height: `${props.height ? props.height : '390px'}`
     }}>
      {renderOverlayContent()}
       <div
         className={classes.overlayContentContainerImage}
         style={{
           backgroundImage: `url(${props.img})`,
           height: `${props.height ? props.height : 'inherit'}`
         }}
       ></div>
     </div>
   </>
  )
}

export default BackgroundImageBanner

BackgroundImageBanner.propTypes = {
  img: PropTypes.string.isRequired,
  height: PropTypes.string,
  content: PropTypes.string,
  top: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string
}
