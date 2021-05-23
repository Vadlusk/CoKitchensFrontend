import React from 'react'
import PropTypes from 'prop-types'
import { Card, Typography, CardMedia, CardContent, CardHeader, Divider, Box } from '@material-ui/core'

import SkillCard from '../SkillCard'

const KitchenCard = (props) => {
  const kitchenTitle = `CoKitchen - ${props.name}, ${props.locationName}`
  const distributingSkills = ['Forestry', 'Composting', 'Carpentry', 'Upcycling']
  const learningSkills = ['Water Management', 'Tree Grafting']

  return (
    <>
      <Card style={{
        maxWidth: '1300px',
        margin: '30px',
        borderBottom: '1px solid black'
      }} elevation={0}>
        <CardHeader
         title={kitchenTitle}
         style={{ padding: '20px' }}
        />
        <Divider />
        <div style={{ padding: '20px', paddingBottom: '40px', textAlign: 'center' }}>
          <CardMedia
            style={{
              height: '300px',
              width: '45%',
              margin: '0px auto',
              display: 'inline-block'
            }}
            image={props.img}
            title={props.name}
          />
          <CardContent style={{
            display: 'inline-block',
            width: '45%',
            verticalAlign: 'top'
          }}>
            <Box
              style={{
                textAlign: 'center'
              }}
            >
              <Typography
                variant="subtitle1"
                style={{
                  paddingBottom: '20px'
                }}
                >
                <b>CoKitchen Facilitators:</b> Connor Harron, Benji Ross, Dan Gamble
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
              >
                {props.description}
              </Typography>
            </Box>
           </CardContent>
        </div>
        <Divider textAlign="center">Local Skillsets</Divider>
        <div
          style={{
            width: '45%',
            display: 'inline-block',
            padding: '20px'
          }}
        >
          <Typography variant="h6"
            style={{ paddingBottom: '10px' }}
          >Skills to Distribute</Typography>
          {distributingSkills.map(skill =>
            <Box key={skill} style={{ display: 'inline' }}>
              <SkillCard skill={skill}></SkillCard>
            </Box>
          )}
        </div>
        <div
          style={{
            width: '45%',
            display: 'inline-block',
            padding: '20px'
          }}
        >
          <Typography variant="h6"
            style={{ paddingBottom: '10px' }}
          >Looking to Learn</Typography>
          {learningSkills.map(skill =>
            <Box key={skill} style={{ display: 'inline' }}>
              <SkillCard skill={skill}></SkillCard>
            </Box>
          )}
        </div>
       </Card>
     </>
  )
}

export default KitchenCard

KitchenCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  locationName: PropTypes.string
}
