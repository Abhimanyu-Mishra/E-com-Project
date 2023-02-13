import React, { useContext } from 'react'
import { store } from './Details'
import Card from '../Utility/Card'
const Accessories = () => {
  const [data]=useContext(store)

  return (
    <div>
    {
      data && data.filter((i)=>{return(i.catagory==='Accessories')}).map((n,key)=>{return(
        <Card 
         imgurl={n.image}
         name={n.name}
         price={n.price}
         oprice={n.oPrice}
         />
      )})
    }
    </div>
  )
}

export default Accessories
