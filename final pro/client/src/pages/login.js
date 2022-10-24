import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {authUser} from '../utils/loginUtils'



const Login = () => {

  const nav = useNavigate()
  const [user, setUser] = useState({})

const [message, setMessage] = useState(false)
    

const handleLogin=(e)=>
    {
    const {name, value}= e.target
    setUser({...user, [name]: value}) 
    }


  const login = async ()=>{
      const {data} = await authUser(user)
      if(data.name){
      sessionStorage['auth']= JSON.stringify(data.accessToken);
      sessionStorage['user'] = data.name;
      nav('/home');
    }
    else setMessage(!message)
  }



    return (
    <div className="login" style={{'textAlign' : 'center', marginTop: '20%'}}>
        
     <div style={{padding:'20px',width: '600px', objectPosition: 'center',margin:'auto', borderStyle: 'solid', visibility: message? 'hidden':'visible' }} >
          
          <h1>Movie Subscription Website</h1>
          <h3 style={{margin:'auto', visibility: message? 'visible':'hidden' ,color: 'red'}}>Details Do Not Match!
          {"  "}<button onClick={()=>setMessage(!message)}>Try Again</button>
          </h3>

          <input type="text" name="username" placeholder='username'onChange={handleLogin} /><br/>
          <input type="text" name="pw" placeholder='password' onChange={handleLogin} /><br/>
         {user.username&&user.pw&& <button onClick={login}>login</button>}

    </div>

    </div>
  )
}

export default Login