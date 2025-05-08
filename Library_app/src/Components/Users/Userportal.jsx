import React from 'react'
import Navbar from '../Navbar'
import Home from '../Home'
import Books from '../Books'
import ReadBooks from '../ReadBooks'
import Users from '../Users'
import { Route, Routes } from 'react-router-dom'
import AddCard from './AddCard'


const UserPortal = () => {
  return (
    <>
      <Navbar/>
        
        <Routes> 
           <Route element={<Home/>} path='/'/>
           <Route element={<Books/>} path='/books'/>
           <Route element={<ReadBooks/>} path='/readbooks/:id'/>
           <Route element={<Users/>} path='/users'/>
           <Route element={<AddCard/>} path='/addcard/:id'/>

           
        </Routes>
    
    </>
  )
}

export default UserPortal ;