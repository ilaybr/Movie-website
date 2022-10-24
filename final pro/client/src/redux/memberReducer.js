

const intialState = {
    members: [],
    memberSearch: []
    }
    
    const applyMembers=(state= intialState, action)=>{
        switch (action.type) {
            case "LOAD_MEMBERS":
                return {...state, members : action.payload};
            
                case 'SET_MEMBER':
                return {...state, memberSearch : action.payload};
    
                
            case 'ADD_MEMBER':
                return {...state, members : [...state.members, action.payload]};
                
            case "UPDATE_MEMBERS":
                let i = state.members.findIndex(x=>x._id === action.payload._id)
                let members = [...state.members]
        
                return {...state, members: [...members.slice(i,1),action.payload,...members.slice(0,i)]};
    
    
            case "DELETE_MEMBER":{
                return {...state, members: state.members.filter(movie=> movie._id !== action.payload)}
            }
        
            default:
                return {...state}
        }
    }
    
    export default applyMembers