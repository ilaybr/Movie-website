
import { Outlet, useNavigate} from 'react-router-dom'
import React,{useState} from 'react'


const Movies = () => {

  const [movie, setMovie] = useState();
  const [search, setSearch] = useState()
  const nav = useNavigate();
  
 

    return (
      <div>
      <button onClick={()=>{setMovie("");nav('')} }>All Movies</button>
      <button onClick={()=> nav('add/')}>Add Movie</button> {' '}
      Search: <input onChange={e=>setSearch(e.target.value)}/> 
      <button onClick={()=>setMovie(search)}>Find</button>
      <Outlet context={[movie, setMovie]} /> 

      </div>
    )
}

export default Movies