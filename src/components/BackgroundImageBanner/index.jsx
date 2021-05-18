import React from 'react'
import PropTypes from 'prop-types'

const BackgroundImageBanner = (props) => {
  return (
   <>
     <div style={{
       position: 'relative',
       height: '390px'
     }}>
       <div
         style={{
           backgroundImage: `url(${props.img})`,
           width: '100%',
           height: 'inherit',
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
  img: PropTypes.string
}
