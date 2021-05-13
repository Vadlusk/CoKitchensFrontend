import React from 'react'

import { Divider } from '@material-ui/core'
import TitleBanner from '../../components/TitleBanner'
import KitchenCard from '../../components/KitchenCard'

import useKitchens from '../../hooks/useKitchens'

const Kitchens = () => {
  const { kitchens } = useKitchens()

  return (
    <>
      <TitleBanner>Community Kitchens</TitleBanner>
        {kitchens.map(kitchen =>
          <>
          <KitchenCard key={kitchen.name} name={kitchen.name} img={kitchen.img} description={kitchen.description}></KitchenCard>
          </>
        )}
      <Divider />
    </>
  )
}

export default Kitchens
