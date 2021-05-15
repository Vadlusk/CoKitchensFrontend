import React from 'react'
import PropTypes from 'prop-types'

import { Card, Typography, CardHeader } from '@material-ui/core'

const StoryCard = (props) => {
  const truncate = (content) => {
    if (content.length > 300) {
      return content.substring(0, 300) + '...'
    }

    return content
  }

  const humanReadableTime = (createdAt) => {
    const date = new Date()
    date.setTime(Date.parse(createdAt))

    return date.toDateString()
  }

  return (
    <>
      <Card style={{
        maxWidth: '350px',
        maxHeight: '500px',
        padding: '30px',
        margin: '20px',
        display: 'inline-block',
        verticalAlign: 'top'
      }} elevation={0}>
        <CardHeader
         title={props.title}
         style={{ padding: '20px 0' }}
        />
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {truncate(props.content)}
        </Typography>
        <Typography style={{ padding: '10px 0', fontSize: '12px', textDecoration: 'underline' }}>See More...</Typography>
        <Typography>{humanReadableTime(props.created_at)}</Typography>
       </Card>
     </>
  )
}

export default StoryCard

StoryCard.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.text,
  created_at: PropTypes.string,
  img: PropTypes.string,
  video_url: PropTypes.string
}
