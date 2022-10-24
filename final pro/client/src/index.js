import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import appReducer from './redux/movieReducer'
import memberReducer from './redux/memberReducer'
import {getMovies} from './utils/movieUtils'
import {getMembers} from './utils/membersUtils '

const rootReducer = combineReducers({
  movies: appReducer,
  members : memberReducer
})

const composedEnhancer = applyMiddleware(thunkMiddleware)
const store = createStore(rootReducer, composedEnhancer);

store.dispatch(getMovies)
store.dispatch(getMembers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    
        <BrowserRouter>
        <App />
        </BrowserRouter>

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
