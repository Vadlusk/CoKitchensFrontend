import React from 'react'

import StoryCard from '../../components/StoriesCard'
import BackgroundImageBanner from '../../components/BackgroundImageBanner'
import { Typography, Button, FormControl, InputLabel, Input } from '@material-ui/core'

import useStories from '../../hooks/useStories'
import styled from 'styled-components'
import arkansasRiverBackgroundImage from './Assets/arkansas-river-background.png'

const Stories = () => {
  const { stories } = useStories()

  return (
    <>
      <BackgroundImageBanner img={arkansasRiverBackgroundImage}></BackgroundImageBanner>
      {stories.map(story =>
        <>
          <StoryCard
            key={story.title}
            type={story.type}
            title={story.title}
            img={story.img}
            content={story.content}
            created_at={story.created_at}
            video_url={story.video_url}
           ></StoryCard>
        </>
      )}
      <S.EmailSubscriptionSection>
      <div style={{ padding: '50px', display: 'grid', paddingBottom: '0' }}>
        <Typography style={{ margin: 'auto', paddingBottom: '20px' }}>
          Drop us your email if you would like to know when we publish new articles or videos.
        </Typography>
        <FormControl style={{ margin: 'auto' }}>
          <InputLabel>Email</InputLabel>
          <Input id="email" aria-describedby="Email" />
          <Button id="email">Submit</Button>
        </FormControl>
      </div>
      </S.EmailSubscriptionSection>
    </>
  )
}

export default Stories

const S = {
  CommunityMealsDescription: styled.div`
  position: relative;
  top: 20%;
  width: 66%;
  margin-left: 30px;
  font-family: 'Gt super text book', Georgia, sans-serif;
  font-size: 27px;
  padding: 50px 0;
  color: '#d4d4d4'
  `,
  EmailSubscriptionSection: styled.div`
  width: 100%;
  background: #d4d4d4;
  height: 200px;
  border-top: 1px solid black;
  `
}
