
import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useOutletContext } from 'react-router-dom'
import Movie from './movie'
import '../../../global.css'


const AllMovies = (context) => {
  
  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const  query = useQuery();
  const  id = query.get("id")

  const [movie] = useOutletContext()
  
  const movies = useSelector(state=> state.movies.movies.filter(x=>id? x._id===id : movie? x.name.toLowerCase().includes(movie.toLowerCase()) : x ))
  
  
  return (
    <div className='allMovies'> 
        {movies[0] ?
          movies.map(movie=>{
            return(
            <Movie key={movie._id} props={movie}/>) 
          }) : <h3>No Results</h3>
        }
    
    
    
    </div>
  )
}

export default AllMovies