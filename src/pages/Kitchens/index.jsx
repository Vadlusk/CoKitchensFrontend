import React from 'react'

import { Divider, Card, Typography, Box } from '@material-ui/core'
import KitchenCard from '../../components/KitchenCard'

import useKitchens from '../../hooks/useKitchens'

const Kitchens = () => {
  const { kitchens } = useKitchens()

  return (
    <>
      <Card
        elevation={3}
        style={{
          margin: '20px',
          padding: '20px',
          backgroundColor: 'rgb(71 102 15 / 21%)'
        }}
      >
        <Typography
          variant="h5"
          style={{ textAlign: 'center' }}
        >Want to facilitate CoKitchen gatherings where you live? Please reach out. Info is on the contact page.</Typography>
      </Card>
        {kitchens.map(kitchen =>
          <Box key={kitchen.name}>
            <KitchenCard
              name={kitchen.name}
              img={kitchen.img}
              description={kitchen.description}
              locationName={kitchen.location_name}
            ></KitchenCard>
          </Box>
        )}
      <Divider />
    </>
  )
}

export default Kitchens
