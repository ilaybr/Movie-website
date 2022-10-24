import {useState,useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from '../navBar'

import '../global.css'



const Home = () => {


    const nav = useNavigate()
    const [user, setUser] = useState("")
  
   
      useEffect(()=>{
        if (sessionStorage["user"]&&sessionStorage["auth"])
        {
        setUser(sessionStorage["user"])
        
        }
        else{
        alert("You Must Log In")
        nav('/')
        sessionStorage.removeItem("auth")
        sessionStorage.removeItem("user")
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }},[])


        function logOut()
        {
          sessionStorage.removeItem("auth")
          sessionStorage.removeItem("user")
          nav("/")
        }


  return (
    <div className='home'>
      <span style={{float: 'Left'}}>Welcome {user}{" "} <button onClick={logOut}>Log Out</button> </span> <br/>
        <h1>Movie Subscription Website</h1>

    <NavBar/>
        <br/>
            <Outlet/>
        



    </div>
  )
}

export default Home