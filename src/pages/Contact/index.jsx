import React from 'react'

import styled from 'styled-components'

import tropicalLeavesBackgroundImage from './Assets/tropical-leaves-background.jpg'

const Contact = () => {
  return (
    <>
      <S.BackgroundImageWrapper>
        <S.BackgroundImgage></S.BackgroundImgage>
      </S.BackgroundImageWrapper>
      <S.CommunityMealsDescription>
        <p>Email: cokitchens@cokitchens.com</p>
      </S.CommunityMealsDescription>
    </>
  )
}

export default Contact

const S = {
  BackgroundImageWrapper: styled.div`
  position: relative;
  width: 1450px;
  height: 570px;
  `,
  BackgroundImgage: styled.div`
  background-image: url(${tropicalLeavesBackgroundImage});
  width: 1450px;
  height: 570px;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 4px solid black;
  `,
  CommunityMealsDescription: styled.div`
  position: relative;
  top: 20%;
  width: 66%;
  margin: 0 auto;
  font-family: 'Gt super text book', Georgia, sans-serif;
  font-size: 27px;
  padding: 50px 0;
  color: 'white'
  `
}
