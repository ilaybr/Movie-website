

const intialState = {
movies: [],
movieSearch: [],
moviePage : {}
}

const applyMovies=(state= intialState, action)=>{
    switch (action.type) {
        case "LOAD":
        return {...state, movies : action.payload};
        
        case "FIND":
        return {...state, movieSearch : action.payload};

            
        case "ADD":
            
            return {...state, movies : [...state.movies, action.payload]};
            
        case "UPDATE":
            let i = state.movies.findIndex(x=>x._id === action.payload._id)
            let movies = [...state.movies]
    
            return {...state, movies: [...movies.slice(i,1),action.payload, ...movies.slice(0,i)]};



        case "DELETE":{
            return {...state, movies: state.movies.filter(movie=> movie._id !== action.payload)}
        }
    
        default:
            return {...state}
    }
}

export default applyMovies