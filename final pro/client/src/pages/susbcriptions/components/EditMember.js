import {useState} from 'react'
import {updateMember} from "../../../utils/membersUtils "
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

const EditMember = () => {
  



  const {id} = useParams("id")
  const dispatch = useDispatch()
  const [member, setMember] = useState({_id : id})
  const nav=useNavigate()
  const thisMember = useSelector(state=> state.members.memberSearch)

  const handleInputs=(e)=>
  {
    const {name,value} = e.target
    setMember({...member,[name]: value  }) 
  }

    return (
    <div>
    <h2>Edit member</h2>

        Name: <input name="name" onChange={handleInputs} placeholder={thisMember?.name}/><br/>
        Email: <input name="email" onChange={handleInputs} placeholder={thisMember?.email} /> <br/>
        City: <input name="city" onChange={handleInputs} placeholder={thisMember?.city} /> <br/>
        { member.name&&
        <button  onClick={()=> {dispatch(updateMember(id,member));nav('/home/subscriptions')}}>Update</button>}
        <button  onClick={()=> nav('/home/subscriptions')}>Cancel</button>
        



    </div>
  )
}

export default EditMember