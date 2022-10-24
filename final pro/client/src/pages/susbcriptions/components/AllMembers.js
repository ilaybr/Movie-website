import React from 'react'
import {useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../../../global.css'
import Member from './Member'

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

const AllMembers = () => {
 
  const  query = useQuery();
  const  id = query.get("id")

const members = useSelector(state=>state.members.members.filter(x=>id? x._id===id : x ))

  return (

    <div className='allMembers'>
      {members.map(member=>
         <Member key={member._id} props ={member} />
        )}

    </div>
  )
}

export default AllMembers