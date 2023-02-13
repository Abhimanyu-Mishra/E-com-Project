import React, { useContext } from 'react'
import { store } from './Details'
import './Home.css'
import Card from '../Utility/Card'
const IPad = () => {
  const[data]=useContext(store)
  console.log(data);
  return (
    <div className='home'>
    {
      data && data.filter((i)=>{return(i.catagory==="Ipad")}).map((n,key)=>{ return(

       <div>
        <Card 
        imgurl={n.image}
        name={n.name}
        oprice={n.oPrice}
        price={n.price}

        />
       </div>
      )
      })
    }
      
    </div>
  )
}

export default IPad
