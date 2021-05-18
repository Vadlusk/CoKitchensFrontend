import React from 'react'

import styled from 'styled-components'

import tallGrassBackgroundImage from './Assets/tall_grass_background.png'
import BackgroundImageBanner from '../../components/BackgroundImageBanner'

const Contact = () => {
  return (
    <>
      <BackgroundImageBanner img={tallGrassBackgroundImage}></BackgroundImageBanner>
      <S.CommunityMealsDescription>
        <p>Email: benji.cokitchens@gmail.com</p>
      </S.CommunityMealsDescription>
    </>
  )
}

export default Contact

const S = {
  CommunityMealsDescription: styled.div`
  position: relative;
  top: 20%;
  width: 66%;
  margin-left: 30px;
  font-family: 'Gt super text book', Georgia, sans-serif;
  font-size: 27px;
  `
}
