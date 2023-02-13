import React, { useContext } from 'react'
import Card from '../Utility/Card';
import { store } from './Details';
import './Home.css'
const IPhone = () => {
  const [data]=useContext(store);
  return (
    <div className='home'>
    {
      data && data.filter((i)=>{return(i.catagory==='Mobile')}).map((n,key)=>{return(
        <div>
         <Card 
           imgurl={n.image}
           name={n.name}
           price={n.price}
           oprice={n.oPrice}
           />
        </div>
      )})
    }
      
    </div>
  )
}

export default IPhone
