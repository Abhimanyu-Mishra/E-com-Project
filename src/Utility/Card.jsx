import React from 'react'
import './Card.css'
const Card = (props) => {
    const {imgurl,name,price,oprice}=props;
  return (
    <div className='maindiv'>
      <div ><img className='img'  src={imgurl} alt=''/> </div>
      <h3 className='name'>{name}</h3>
      <p className='oprice'>{oprice}</p>
      <p className='price'>{price}</p>

      <br/>
      <button className='btn'>AddTocart</button>
      <button className='buy'>BuyNow</button>

    </div>
  )
}

export default Card
