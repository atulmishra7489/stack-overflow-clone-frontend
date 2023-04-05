import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import SignupUser from './pages/Auth/SignupUser'
import Dashboard from './pages/Dashboard'
import Authenticate from './pages/OtpAuthenticate/Authenticate'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
import 'react-toastify/dist/ReactToastify.css';

const AllRoutes = () => {
  return (
        <Routes>
            <Route exact path='/' element={<Home/>} ></Route>
            <Route exact path='/Auth' element={<Auth/>}></Route>
            <Route exact path='/SignupUser' element={<SignupUser/>}></Route>
            <Route exact path='/Questions' element={<Questions/>}></Route>
            <Route exact path='/AskQuestion' element={<AskQuestion/>}></Route>
            <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
            <Route path='/Tags' element={<Tags />} />
            <Route path='/Users' element={<Users />} />
            <Route path='/Users/:id' element={<UserProfile />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/authenticate' element={<Authenticate />} />
        </Routes>
  )
}

export default AllRoutes