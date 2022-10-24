
import axios from 'axios'
//import * as ma from '../redux/memberActions'
const url = "http://localhost:8000/api/member/"

// for Jwt server auth:
// if(sessionStorage['auth']!== undefined){
//   axios.defaults.headers.common["accesstoken"] = JSON.parse(sessionStorage['auth']
// )}

const getMember =async(id)=> {
    const {data} =await axios.get(`${url}/${id}`)
    return data}





    function deleteMember(id) {
      return async function saveNewMember(dispatch, getState) {
        await axios.delete(url+id)
        await dispatch({ type: 'DELETE_MEMBER', payload: id })
      }
    }



    function updateMember(id, obj) {
   let Member = obj
   return async function updateMemberData(dispatch, getState) {
       await axios.put(`${url}${id}`, Member)
       await dispatch({ type: 'UPDATE_MEMBERS', payload: obj })
   }
 }

     function addMember(obj) {
    let Member = obj
    return async function saveNewMember(dispatch, getState) {
      const response = await axios.post(url, Member)
      await dispatch({ type: "ADD_MEMBER", payload: response.data })
    }
  }


        async function getMembers(dispatch, getState) {
        const response = await axios.get(url)
        dispatch({ type: 'LOAD_MEMBERS', payload: response.data })
      }

     
export {getMembers,addMember,deleteMember,updateMember,getMember}