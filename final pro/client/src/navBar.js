import React from 'react'
import { useNavigate, } from 'react-router-dom'


const NavBar = () => {
  const nav =useNavigate();

  
    return (
    <div>
        <button onClick={()=>nav('movies')} >Movies</button>
        <button onClick={()=>nav('subscriptions')} >Members & Subscriptions</button>
       
        
        </div>
  )
}

export default NavBar