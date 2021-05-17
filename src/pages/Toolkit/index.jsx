import React from 'react'

import styled from 'styled-components'
import valleyFogBackgroundImage from './Assets/valley_fog.jpg'
import useTools from '../../hooks/useTools'

import ToolCard from '../../components/ToolCard'

const Toolkit = () => {
  const { tools } = useTools()

  return (
    <>
      <S.BackgroundImageWrapper>
        <S.BackgroundImgage></S.BackgroundImgage>
      </S.BackgroundImageWrapper>
      {tools.map(tool =>
        <>
        <ToolCard key={tool.name} name={tool.name} img={tool.img} description={tool.description}></ToolCard>
        </>
      )}
    </>
  )
}

export default Toolkit

const S = {
  BackgroundImageWrapper: styled.div`
  position: relative;
  height: 390px;
  `,
  BackgroundImgage: styled.div`
  background-image: url(${valleyFogBackgroundImage});
  width: 100%;
  height: inherit;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 4px solid black;
  `
}
