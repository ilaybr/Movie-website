import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {addMovie} from '../../../utils/movieUtils'


const AddMovie = () => {

  const nav = useNavigate()
  const [movie, setMovie] = useState()
  const [genres, setGenres] = useState([])
  const dispatch = useDispatch()
  
  const handleInputs=(e)=>{
    const {name,value} = e.target
    return setMovie({...movie, [name]: value  })
  }

  const handleGenres= (e)=>{
    const {value} = e.target
   setGenres(value.split(","));
   setMovie({...movie, genres: genres})
  }

  return (
    <div>

       <h2>Add Movie</h2>
        Movie Name <br/>
        <input name="name" onChange={handleInputs} /><br/>
        Date Premiered: <br/>
         <input type="date" name="premiered" onChange={handleInputs} /> <br/>
        Genere <br/>
        <input onChange={handleGenres}/><br/>
        Image URL <br/>
        <input name="img" onChange={handleInputs} /> <br/>
        <button  onClick={()=> {dispatch(addMovie(movie)); nav('/home/movies')}}>Add</button>
        <button  onClick={()=> {setMovie({}); nav('/home/movies')}}>Cancel</button>


    </div>
  )
}

export default AddMovie