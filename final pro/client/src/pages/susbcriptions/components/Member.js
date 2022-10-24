import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import * as subsUtils from '../../../utils/subsUtils '
import '../../../global.css'
import * as memberUtils from '../../../utils/membersUtils '
import {doSetMember} from '../../../redux/memberActions'

const Member = (props) => {


const dispatch = useDispatch()
  const nav = useNavigate()
  const movies = useSelector(state=> state.movies.movies)
  const member = props.props
  const [newSub, setNewSub] = useState({})
  const [subs, setSubs] = useState([])
  const [newSubWindow, setNewSubWindow] = useState(false)
      
  
  useEffect(() => {(async()=>{
      let data =await subsUtils.searchSubByMember(member._id)
      setSubs(data)})()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[newSubWindow])
      
      const [didntSee, setDidntSee] = useState([])
     
      
      const handleNewSub=(e)=>{
        const{name, value} = e.target
        setNewSub({...newSub, member:member._id, [name] :value})
       
      }  

      const anddSubButton = async ()=> {
        setNewSubWindow(!newSubWindow)
        const resp = movies.filter(movie => !subs.some(sub => movie._id === sub.movie._id));
         setDidntSee(resp)
      }

      const handleSubmit= async ()=>
      {
          await subsUtils.addSub(newSub)
          setNewSubWindow(!newSubWindow)
         
      }
  

  return (



    <div className='member'>



    <h2>{member.name|| member.email} </h2>

    City : {member.city} <br/>

    <button onClick={()=>{dispatch(doSetMember(member));nav(`edit/${member._id}`)}}>edit</button>   

    <button onClick={()=>dispatch(memberUtils.deleteMember(member._id))}>delete</button>                                     
    <h3>Movies Watched:</h3>
  
    <ul>
        {
          subs.map(sub => 
          <li key={sub._id}> <Link to={`/home/movies?id=${sub.movie._id}`}>{sub.movie.name}</Link>
          {" | " +sub.date?.split('T')[0]}
          {" | "} <button onClick={()=>subsUtils.deleteSub(sub._id)}>delete</button> </li>)
        }
        <br/><br/>
    </ul>

    <button onClick={anddSubButton}>Subscribe to a new Movie</button>

    <br/>

        <div style={{height : '300px', marginTop:'5%', display: newSubWindow? 'inline': 'none'}}>
        <h3> Subscribe to a new Movie :</h3>


        <select  name='movie' onChange={handleNewSub}  defaultValue={""} >

        <option disabled value={""}>Pick A Movie</option>
        {didntSee?.map(x=> 
        <option key={x._id} value={x._id} > {x.name} </option>)} 
        
        </select>

        <input name='date' type='date' onChange={handleNewSub}/>

        <br/>

        { newSub.movie && newSub.date&&
        <button onClick={handleSubmit} >Subscribe</button>
        
        }
          <br/>
        </div>
      <br/>
    </div>
  )
}

export default Member