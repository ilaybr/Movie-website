import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as memberUtils from '../../../utils/membersUtils '

const AddMember = () => {

  const nav =useNavigate()
  const dispatch = useDispatch()
  const [newMember, setNewMember] = useState({})
  function hanldeMember(e){
    const {name,value} = e.target
    setNewMember({...newMember, [name]: value})
  }
  
  return (
    <div>
      <h3>Add New Member</h3>
      <input name='name' placeholder="Full Name" onChange={hanldeMember}/><br/>
      <input name='email' type='email' placeholder="Email"onChange={hanldeMember}/><br/>
      <input name='city' placeholder='City' onChange={hanldeMember} /> <br/>
      <button onClick={()=>nav(-1)}>Cancel</button> <br/>
     {newMember.email && <button onClick={()=>{dispatch(memberUtils.addMember(newMember)); nav('/home/subscriptions')}}>Add</button>}

    </div>
  )
}

export default AddMember