import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
    <center><h1 className='head'>iShop</h1></center>
    <div className='main-div'>
      <Link className='nav' to ='/'> <span >Home</span> </Link>
      <Link className='nav' to ='/acc'> <span>Accessories</span> </Link>
      <Link className='nav' to ='/ipad'> <span>IPad</span> </Link>
      <Link className='nav' to ='/iphone'> <span>IPhone</span> </Link>
      <Link className='nav' to ='/mac'> <span>Mackbook</span></Link>
      <Link className='nav' to ='/store'> <span>Store</span> </Link>

    </div>
    </div>
  )
}

export default Header
