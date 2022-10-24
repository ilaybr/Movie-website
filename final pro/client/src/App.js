import {Routes,Route} from 'react-router-dom'
import './global.css'
import Login from './pages/login'
import Home from './pages/home'
import Movies from './pages/Movies/index.movies'
import Subscriptions from './pages/susbcriptions/index.subscriptions'
import AllMembers from './pages/susbcriptions/components/AllMembers'
import AddMovie from './pages/Movies/movie.components/movie.Add'
import AllMovies from './pages/Movies/movie.components/AllMovies'
import EditMovie from './pages/Movies/movie.components/movie.Edit'
import Movie from './pages/Movies/movie.components/movie'
import AddMember from './pages/susbcriptions/components/AddMember'
import EditMember from './pages/susbcriptions/components/EditMember'
import Member from './pages/susbcriptions/components/Member'



function App() {

    

  return (
    <div className="App" >
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home/' element={<Home/>}>
          <Route path='movies' element={<Movies/>}>
              <Route path='' element={<AllMovies/>}/>
              <Route path='search/:id' element={<Movie/>}/>
              <Route path='add/' element={<AddMovie/>}/>
              <Route path='edit/:id' element={<EditMovie/>}/>
          </Route>
          <Route path='subscriptions/' element={<Subscriptions/>}>
            <Route path='' element={<AllMembers/>} />
            <Route path='add/' element={<AddMember/>} />
            <Route path='edit/:id' element={<EditMember/>} />
            <Route path='member/:id' element={<Member/>} />
          </Route>
          
      </Route>
      
     </Routes>
    
    </div>
  );
}

export default App;


