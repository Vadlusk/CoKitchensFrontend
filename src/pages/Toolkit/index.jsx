import React from 'react'
import { Typography, Box } from '@material-ui/core'

import valleyFogBackgroundImage from './Assets/valley_fog.jpg'
import useTools from '../../hooks/useTools'

import ToolCard from '../../components/ToolCard'
import BackgroundImageBanner from '../../components/BackgroundImageBanner'

const Toolkit = () => {
  const { tools } = useTools()

  return (
    <>
      <BackgroundImageBanner img={valleyFogBackgroundImage}></BackgroundImageBanner>
      <Typography
        variant="h4"
        style={{
          textAlign: 'center',
          paddingTop: '20px'
        }}
      >
        Toolkit: Experiments in Weaving Relations to People and Place
      </Typography>
      <Typography
        variant="subtitle1"
        style={{
          textAlign: 'center',
          margin: '20px 18%'
        }}
      >
        The following are experiments that for whatever reason we feel are noteworthy. In some we have greater confidence, in others the experiment is new or hypothetical.
      </Typography>
      <Box
        style={{
          textAlign: 'center'
        }}
      >
      {tools.map(tool =>
        <>
        <ToolCard key={tool.name} name={tool.name} img={tool.img} description={tool.description}></ToolCard>
        </>
      )}
      </Box>
    </>
  )
}

export default Toolkit
