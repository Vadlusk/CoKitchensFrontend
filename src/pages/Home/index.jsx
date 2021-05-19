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
        content="CoKitchens is striving to become a vibrant home for collective experimentation. We are looking to walk together with communities large and small in the discovering and rediscovering of ways to manage our own evolution. We believe that any evolutionary pathway that does not hold Earth Ethics as its foundation will only be temporary at best, which is why our experiments focus on local food as a means of weaving together relationships between our communities and the land."
        height={topBannerHeight}
        top="4%"
        backgroundColor='#4c3f3f6e'
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
          We bring together life experiences, conversations and research to assemble an initial prototype to learn from and build off of. It is made up of the 4 following rituals:
        </Typography>
        <Box style={{
          textAlign: 'center'
        }}>
          <ElementCard
            title="Community Courses"
            titleImage={<LightMode fontSize="large" />}
          >
            There are many skill sets that increase the ability to provide for people and steward landscapes. We are looking to host community courses that function to find and distribute those skills throughout communities, increasing collective capacity.
          </ElementCard>
          <ElementCard
            title="Project Parties"
            titleImage={<Construction fontSize="large" />}
          >
            Many hands make light work. Many local projects would benefit greatly from many hands. We are striving to improve our systems for facilitating project parties so that our community landscapes heal and produce more food and fiber.
          </ElementCard>
          <ElementCard
            title="Campfires"
            titleImage={<LocalFireDepartment fontSize="large" />}
          >
            Human communities have been cultivating shared narratives over fire for tens if not hundreds of thousands of years. We intend to discover and rediscover the importance of this practice in the formation of community, collective sense making, and the emergence of shared stories.
          </ElementCard>
          <ElementCard
            title="Shared Meals"
            titleImage={<FoodBank fontSize="large" />}
          >
            Breaking bread is one of our greatest tools for creating and maintaining human connections. Potlucks, asadas, barbeques, progressive dinners, lūʻaus, church suppers - whatever form it takes, we believe the world needs a lot more shared meals.
          </ElementCard>
        </Box>
      </Box>
    </>
  )
}

export default Home
