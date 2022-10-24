import React, { useState,useEffect } from 'react'
import {deleteMovie} from '../../../utils/movieUtils'
import {Link, useNavigate} from 'react-router-dom'
import {searchSubByMovie} from '../../../utils/subsUtils '
import '../../../global.css'
import { useDispatch } from 'react-redux'
import {doFindMovie} from '../../../redux/movieActions'

const Movie = (props) => {
    const nav = useNavigate()
    const movie = props.props
    const [subs, setSubs] = useState([])
    const dispatch = useDispatch()
    
    useEffect(() => {
      (async ()=>{
           const data= await searchSubByMovie(movie._id)
           setSubs(data)
      })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  return (
    <div className='movie'>
      
      <div className='movieData'>

          <h2>{movie.name}, {movie.premiered?.slice(0,4)}</h2>
          <img src={movie.img} alt={`${movie.name} pictuce`} style={{width :'300px'}} /><br/>
          <button onClick={()=>{nav(`edit/${movie._id}`); dispatch(doFindMovie(movie))} }>Edit</button>
      
          <button onClick={async ()=>{dispatch(await deleteMovie(movie._id)); nav('/home/movies')}}>Delete</button>  
      </div>
        

        <div className='subeData'>


          <ul style={{marginTop:'50%'}}>
            {
              subs.length <= 0  ? <h3>no subscribers</h3>:
              subs.map(sub=>{return(
                
              <li  key={sub?._id} >Subscribed by {' '}
              <Link to={`/home/subscriptions?id=${sub.member?._id}`}>{sub.member?.name||sub.member?.email}</Link> {' '}
              in: {sub.date?.split("T")[0]}</li>
            )}
          )}
          </ul>
        </div>


    </div>
  )
}

export default Movie


