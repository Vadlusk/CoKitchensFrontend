import React from 'react'

import styled from 'styled-components'

import cedarBackgroundImage from './Assets/cedar-background.jpg'
import circleImage from './Assets/blue-circle.png'

const Home = () => {
  return (
    <>
      <S.Title>Community Meals</S.Title>
      <S.BackgroundImageWrapper>
        <S.BackgroundImgage></S.BackgroundImgage>
        <S.CommunityMealsDescription>
          <p>Breaking bread is one of our greatest tools for creating and maintaining human connections. Potlucks, asadas, barbeques, progressive dinners, lūʻaus, church suppers - whatever it is called where you live, we believe the world needs a lot more shared meals. We are a community of seekers who want to eat delicious local food together.</p>
        </S.CommunityMealsDescription>
      </S.BackgroundImageWrapper>
      <div>
        <S.CircleImageWrapper>
          <S.CircleImage></S.CircleImage>
          <div>Reskilling & Project Parties</div>
        </S.CircleImageWrapper>
        <p>We are looking for ways to increase community abilities to produce food and steward landscapes. We aim to explore models where communities can increase skills through education and improve growing capacity and stewardship through project parties. As communities evolve and develop, shared meals continue to provide a place to celebrate increasing local abundance, security and stewardship. Courses are taught by professionals whenever possible, but we also strive to provide ways for groups to figure things out on their own.</p>
      </div>
    </>
  )
}

export default Home

const S = {
  Title: styled.div`
  width: 100%;
  padding: 60px 0;
  font-family: 'Gt super text book', Georgia, sans-serif;
  font-size: 75px;
  text-align: center;
  border-bottom: 4px solid black;
  background-color: #307351;
  color: white;
  `,
  BackgroundImgage: styled.div`
  background-image: url(${cedarBackgroundImage});
  width: 1450px;
  height: 608px;
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
  border: 1px solid black;
  background-color: #bfbfbfbd;

  p {
    padding: 0 40px;
    text-align: center;
  }
  `,
  BackgroundImageWrapper: styled.div`
  position: relative;
  width: 1450px;
  height: 608px;
  `,
  CircleImageWrapper: styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  `,
  CircleImage: styled.div`
  background-image: url(${circleImage});
  position: absolute;
  width: 943px;
  height: 403px;
  margin-top: 4px;
  `
}
