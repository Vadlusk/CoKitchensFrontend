import React from 'react'

import { Typography, Divider } from '@material-ui/core'
import TitleBanner from '../../components/TitleBanner'
import KitchenCard from '../../components/KitchenCard'

import useKitchens from '../../hooks/useKitchens'

const Kitchens = () => {
  const { kitchens } = useKitchens()

  return (
    <>
      <TitleBanner>Community Kitchens</TitleBanner>
      <Divider />
      <Typography>
        {kitchens.map(kitchen =>
          <>
          <KitchenCard key={kitchen.name} name={kitchen.name} img={kitchen.img} description={kitchen.description}></KitchenCard>
          </>
        )}
      </Typography>
      <Divider />
    </>
  )
}

export default Kitchens
