import React from 'react'
import { Typography, Divider, Card } from '@material-ui/core'
import BackgroundImageBanner from '../../components/BackgroundImageBanner'

import rockBackgroundImage from './Assets/rock-background.png'

const Home = () => {
  return (
    <>
      <BackgroundImageBanner img={rockBackgroundImage}></BackgroundImageBanner>
      <Card
        style={{
          padding: '20px',
          border: '1px solid black',
          margin: '20px',
          background: '#e8e8e8',
          borderRadius: '3px'
        }}
        elevation={3}
      >
        <Typography
          variant="subtitle1"
        >
          Breaking bread is one of our greatest tools for creating and maintaining human connections. Potlucks, asadas, barbeques, progressive dinners, lūʻaus, church suppers - whatever it is called where you live, we believe the world needs a lot more shared meals. We are a community of seekers who want to eat delicious local food together.
        </Typography>
      </Card>
      <Divider textAlign="left">Courses</Divider>
      <div>
        <p>We are looking for ways to increase community abilities to produce food and steward landscapes. We aim to explore models where communities can increase skills through education and improve growing capacity and stewardship through project parties. As communities evolve and develop, shared meals continue to provide a place to celebrate increasing local abundance, security and stewardship. Courses are taught by professionals whenever possible, but we also strive to provide ways for groups to figure things out on their own.</p>
      </div>
    </>
  )
}

export default Home
