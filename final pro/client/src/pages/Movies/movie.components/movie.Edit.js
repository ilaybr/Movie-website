import React,{useState} from 'react'
import {updateMovie} from '../../../utils/movieUtils'
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

const EditMovie = () => {
  
  const {id} = useParams("id")
  const dispatch = useDispatch()
  const [movie, setMovie] = useState({})
  const [genres, setGenres] = useState([])
  const nav=useNavigate()
  const thisMovie = useSelector(state=>state.movies.movieSearch)
    
  

 
  

const handleInputs=(e)=>{
    const {name,value} = e.target
    return setMovie({...movie,_id:id ,[name]: value  })
  }

  const handleGenres= (e)=>{
    const {value} = e.target
   setGenres(value.split(","));
   setMovie({...movie, genres:{genres}})
}
  
  
    return (
    <div>
    <h2>Edit Movie - {thisMovie.name}</h2>

        Movie Name: <input name="name" onChange={handleInputs}placeholder={thisMovie.name} /><br/>
        Date Premiered: <input type="date" name="premiered" onChange={handleInputs} placeholder={thisMovie.premiered}/> <br/>
        Genere : <input onChange={handleGenres} placeholder={thisMovie.genre?.join()}/><br/>
        Img RRL: <input name="img" onChange={handleInputs} placeholder={thisMovie.img}/> <br/>
        <button  onClick={()=> {dispatch(updateMovie(id,movie));nav('/home/movies')}}>Update</button>
        <button  onClick={()=> nav('/home/movies')}>Cancel</button>
        



    </div>
  )
}

export default EditMovie