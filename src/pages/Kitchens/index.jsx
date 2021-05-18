import React from 'react'

import { Divider, Card, Typography } from '@material-ui/core'
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
          backgroundColor: '#47660f',
          color: 'white'
        }}
      >
        <Typography
          variant="h5"
          style={{ textAlign: 'center' }}
        >If you are interested in starting a CoKitchen where you live, please reach out. You can find our info on the contact page.</Typography>
      </Card>
        {kitchens.map(kitchen =>
          <>
          <KitchenCard
            key={kitchen.name}
            name={kitchen.name}
            img={kitchen.img}
            description={kitchen.description}
            locationName={kitchen.location_name}
          ></KitchenCard>
          </>
        )}
      <Divider />
    </>
  )
}

export default Kitchens
