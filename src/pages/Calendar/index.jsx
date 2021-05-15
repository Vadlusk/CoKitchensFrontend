import React from 'react'

import styled from 'styled-components'

import bakerSkyBackgroundImage from './Assets/baker_sky.jpg'

const Calendar = () => {
  return (
    <>
      <S.BackgroundImageWrapper>
        <S.BackgroundImgage></S.BackgroundImgage>
      </S.BackgroundImageWrapper>
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

const S = {
  BackgroundImageWrapper: styled.div`
  position: relative;
  height: 390px;
  `,
  BackgroundImgage: styled.div`
  background-image: url(${bakerSkyBackgroundImage});
  width: 100%;
  height: inherit;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 4px solid black;
  `
}
