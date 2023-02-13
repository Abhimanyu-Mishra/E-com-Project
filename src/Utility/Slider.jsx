import React, { useState } from 'react'
import { useEffect } from 'react'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.png'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.png'

const Slider = () => {
    const [img,setimg]=useState(0);
    const [allimg] = useState([img1,img2,img3,img4,img5]);

    useEffect =()=>{
        setInterval(()=>{
            setimg(img=> img < 5 ? img + 1 : 0 )
        },3000)
    }
  return (
    <div>
      <img src={allimg[img]} alt='not found' />
      
    </div>
  )
}

export default Slider
