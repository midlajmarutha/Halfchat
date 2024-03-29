import React, { useContext ,useEffect} from 'react'

import Register from './Register'
import axios from 'axios'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Login from './Login'
import Chat from './Chat'
import { UserContext } from './UserContext'
import Edit from './Edit'
import Settings from './Settings'


export default function RouterComponent() {
    axios.defaults.baseURL="http://localhost:3000"||"https://halfchat.onrender.com/"
    axios.defaults.withCredentials=true;
    axios.defaults.headers={
      'Content-Type': 'application/json'
    }
    
    
  return (
      <Router>
        <Routes>
          <Route Component={Chat} path='/'/>
          <Route Component={Settings} path='/settings'/>
          <Route Component={Register} path='/register'/>
          <Route Component={Login} path='/login'/>
          <Route Component={Edit} path='/edit'/>
        </Routes>
      </Router>
 )
}