import axios from 'axios'
import * as ma from '../redux/movieActions'
const url = "http://localhost:8000/api/movie/"
//const jwt = sessionStorage['auth']

//JWT Server Auth:
// if(sessionStorage['auth']!== undefined){
//   axios.defaults.headers.common["accesstoken"] = JSON.parse(sessionStorage['auth']
// )}



const getMovie =async(id)=> {
    const {data} =await axios.get(`${url}/${id}`)
    return data}

    
const searchMovies =async(search)=>{
    if(search !==null ){
    const {data} = await axios.get(`${url}?name=${search}`)
    return ma.doFindMovie(data)}   
}


  const deleteMovie =async(id)=> {
    await axios.delete(`${url}${id}`)
    return {type: 'DELETE' ,payload : id} 
  }


    function updateMovie(id, obj) {
   let movie = obj
   return async function updateMovieData(dispatch, getState) {
       await axios.put(`${url}${id}`, movie)
       await dispatch({ type: 'UPDATE', payload: obj })
   }
 }

    function addMovie(obj) {
    let movie = obj
    return async function saveNewMovie(dispatch, getState) {
      const response = await axios.post(url, movie)
      await dispatch({ type: 'ADD', payload: response.data })
    }
  }

    async function getMovies(dispatch, getState) {
        const response = await axios.get(url)
        dispatch({ type: 'LOAD', payload: response.data })
  }

     
export {getMovies,addMovie,deleteMovie,updateMovie,searchMovies,getMovie}