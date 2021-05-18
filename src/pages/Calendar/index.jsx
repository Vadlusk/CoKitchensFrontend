import React from 'react'

import bakerSkyBackgroundImage from './Assets/baker_sky.jpg'

import BackgroundImageBanner from '../../components/BackgroundImageBanner'

const Calendar = () => {
  return (
    <>
      <BackgroundImageBanner img={bakerSkyBackgroundImage}></BackgroundImageBanner>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=benji.cokitchens%40gmail.com&ctz=America%2FLos_Angeles"
        style={{
          width: '90%',
          height: '800px',
          padding: '30px',
          display: 'block',
          margin: '0 auto',
          border: 'none'
        }}
      ></iframe>
    </>
  )
}

export default Calendar
