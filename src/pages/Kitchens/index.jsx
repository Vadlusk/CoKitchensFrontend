import React from 'react'

import { Divider } from '@material-ui/core'
import KitchenCard from '../../components/KitchenCard'

import useKitchens from '../../hooks/useKitchens'

const Kitchens = () => {
  const { kitchens } = useKitchens()

  return (
    <>
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
