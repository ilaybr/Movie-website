

const doLoadMovies=(obj)=>{
   return {
        type : "LOAD",
        payload: obj}
}
const doAddtoState=(obj)=>{
   return {
        type : "ADD",
        payload: obj}
}

const doFindMovie=(obj)=>{
   return {
        type : "FIND",
        payload: obj}
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




    export {doAddtoState,doUpdateState,dodDeleteFromState,doLoadMovies,doFindMovie}