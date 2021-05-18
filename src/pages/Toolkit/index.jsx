import React from 'react'

import valleyFogBackgroundImage from './Assets/valley_fog.jpg'
import useTools from '../../hooks/useTools'

import ToolCard from '../../components/ToolCard'
import BackgroundImageBanner from '../../components/BackgroundImageBanner'

const Toolkit = () => {
  const { tools } = useTools()

  return (
    <>
      <BackgroundImageBanner img={valleyFogBackgroundImage}></BackgroundImageBanner>
      {tools.map(tool =>
        <>
        <ToolCard key={tool.name} name={tool.name} img={tool.img} description={tool.description}></ToolCard>
        </>
      )}
    </>
  )
}

export default Toolkit
