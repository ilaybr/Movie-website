import axios from 'axios'
const url = "http://localhost:8000/api/subs/"
//JWT Server Auth
// if(sessionStorage['auth']!== undefined){
//     axios.defaults.headers.common["accesstoken"] = JSON.parse(sessionStorage['auth']
//   )}


const getSubs =async()=> {
    const {data} = await axios.get(url) 
    return data}

const getSub =async(id)=> {
    const {data} = await axios.get(`${url}${id}`) 
    return data}

const searchSubByMovie =async(search)=>{
    const {data} = await axios.get(`${url}?movie=${search}`)
    return data}

    const searchSubByMember =async(search)=>{
    const {data} = await axios.get(`${url}?member=${search}`)
    return data}

const updateSub =async(id, obj)=> {
    const {data} = await axios.put(`${url}${id}`, obj)
    return data}

const addSub =async(obj)=>{ 
    const{data}=await axios.post(`${url}`, obj)
    return data}

const deleteSub =async(id)=> {
    const {data}=await axios.delete(`${url}${id}`)
    return data }

export {getSubs,addSub,deleteSub,updateSub,searchSubByMember,searchSubByMovie,getSub}