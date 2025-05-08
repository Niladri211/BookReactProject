import React from 'react'
import './app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import AdminPortal from './Components/Admin/AdminPortal'
import ForgottenPassword from './Components/ForgottenPassword'
import UserPortal from './Components/Users/Userportal'

const App = () => {
  return (
   <>
 <BrowserRouter>
  <Routes>
    <Route element={<LandingPage/>} path='/'/>
    <Route element={<AdminPortal/>} path='/adminportal/*'/>
    <Route element={<ForgottenPassword/>} path='/forget'/>
    <Route element={<UserPortal/>} path='/userportal/*'/>
  </Routes>
 </BrowserRouter>
   </>
  )
}

export default App