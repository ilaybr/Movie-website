import React from 'react'
import {useNavigate,Outlet} from 'react-router-dom'

const Subscriptions = () => {
  
  const nav = useNavigate()


  return (
    <div>
      <button onClick={()=>nav('')}>All Memebers</button>
      <button onClick={()=>nav('add/')}>Add Memeber</button>
      <Outlet/>
    </div>
  )
}

export default Subscriptions