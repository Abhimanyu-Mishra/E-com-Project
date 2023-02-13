import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Home'
import Accessories from '../Component/Accessories'
import IPad from '../Component/IPad'
import IPhone from '../Component/IPhone'
import Mackbook from '../Component/Mackbook'
import Store from '../Component/Store'

const Routerblog = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/acc' element={<Accessories/>}/>
       <Route path='/ipad' element={<IPad/>}/>
       <Route path='/iphone' element={<IPhone/>}/>
       <Route path='/mac' element={<Mackbook/>}/>
       <Route path='/store' element={<Store/>}/>
      </Routes>
    </div>
  )
}

export default Routerblog
