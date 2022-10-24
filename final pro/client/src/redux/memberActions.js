

const doSetMember= (obj)=>{
   return {
        type : "SET_MEMBER",
        payload: obj}
}


const doAddMovie = (obj)=>{
   return {
        type : "ADD",
        payload : obj}
      }

const dodDeleteFromState=(id)=>{
   return {
        type : "DELETE",
        payload: id}
}

const doUpdateState=(obj)=>{
   return {
        type : "UPDATE",
        payload: obj}
}


export {doAddMovie, doSetMember,doUpdateState,dodDeleteFromState}