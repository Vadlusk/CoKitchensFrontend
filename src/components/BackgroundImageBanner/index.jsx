import React from 'react'
import PropTypes from 'prop-types'
import { Card, Typography } from '@material-ui/core'

const BackgroundImageBanner = (props) => {
  const renderOverlayContent = () => {
    if (props.content) {
      return (
        <Card
          style={{
            position: 'absolute',
            padding: '40px',
            zIndex: '1',
            top: props.top,
            color: props.fontColor,
            background: props.backgroundColor,
            margin: '0 40px'
          }}
          elevation={3}
        >
          <Typography
            variant="h6"
            style={{ textAlign: 'center' }}>
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
         style={{
           backgroundImage: `url(${props.img})`,
           width: '100%',
           height: `${props.height ? props.height : 'inherit'}`,
           backgroundSize: 'cover',
           position: 'absolute',
           top: '0',
           left: '0',
           borderBottom: '4px solid black'
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
  content: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired
}
