import React from 'react'
import { Typography, Box } from '@material-ui/core'
import BackgroundImageBanner from '../../components/BackgroundImageBanner'
import ElementCard from '../../components/ElementCard'
import { LocalFireDepartment, Construction, FoodBank, LightMode } from '@material-ui/icons'

import reeseHillBackgroundImage from './Assets/reese-hill-background.jpeg'

const Home = () => {
  const topBannerHeight = '600px'

  return (
    <>
      <BackgroundImageBanner
        img={reeseHillBackgroundImage}
        height={topBannerHeight}
        content="Experimenting to discover healing evolutionary pathways forward"
        top="9%"
        backgroundColor='rgb(87 125 174 / 19%)'
        fontColor="white"
      ></BackgroundImageBanner>
      <Box style={{ paddingTop: '40px', width: '100%' }}>
        <Typography
          variant="h4"
          style={{
            textAlign: 'center'
          }}
        >
          Current Prototype (2021)
        </Typography>
        <Typography
          variant="subtitle1"
          style={{
            textAlign: 'center',
            margin: '20px 18%'
          }}
        >
          We bring together our own life experiences, conversations and research to assemble an initial prototype to learn from and experiment off of. It is made up of the 4 following pillars:
        </Typography>
        <Box style={{
          textAlign: 'center'
        }}>
          <ElementCard
            title="Community Courses"
            titleImage={<LightMode fontSize="large" />}
          >
            There are many skill sets that increase an individual&apos;s or group&apos;s ability to steward landscapes while providing for others. We are looking to host community courses that function to find and distribute those skills throughout communities, increasing collective capacity and possibility. One of the questions we are asking ourselves is how can we facilitate the community teaching itself?
          </ElementCard>
          <ElementCard
            title="Project Parties"
            titleImage={<Construction fontSize="large" />}
          >
            Many hands make light work. Many local projects would benefit greatly from many hands. We are striving to improve our systems for facilitating project parties so that our community landscapes heal, communities increase their production of food, fiber, and medicine, and possibilities for something better and more resilient can emerge.
          </ElementCard>
          <ElementCard
            title="Campfires"
            titleImage={<LocalFireDepartment fontSize="large" />}
          >
            Human communities have been cultivating shared narratives over fire for tens, if not hundreds of thousands of years. The fire holds the space for long conversations where we get to know each other better and maybe develop some shared narrative. A word of caution: please be in right relationship with your place, only have a fire if it is safe and you are familiar with managing one. Big candles work too, anything that can sit in the center and hold attention. Might have to get creative.
          </ElementCard>
          <ElementCard
            title="Shared Meals"
            titleImage={<FoodBank fontSize="large" />}
          >
            Breaking bread brings humans together. Potlucks, asadas, barbeques, progressive dinners, lūʻaus, church suppers - whatever form it takes, we believe the world needs a lot more shared meals. Let&apos;s have some fun and be grateful for the time.
          </ElementCard>
        </Box>
      </Box>
    </>
  )
}

export default Home
