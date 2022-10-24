import axios from 'axios'

const authUser= async (obj)=>{
const data =   await axios.post("http://localhost:8000/api/login", obj)
return data
}
    


export {authUser}