import React, { useContext } from 'react'
import './Home.css'
import { store } from './Details'
import Card from '../Utility/Card';
import Slider from '../Utility/Slider';
const Home = () => {
  const [details] = useContext(store);
  console.log(details);

  return (
    <div className='home' >
    <Slider/>
     {
      details && details.filter((i)=>{return (i.catagory==='Ipad')}).map((n,key)=>{
        return(
          
          <Card 
           imgurl={n.image}
           name={n.name}
           oprice={n.oPrice}          
           price={n.price}
          /> 
         
        )
      })
     }
    </div>
  )
}

export default Home
