import React from 'react'
import Navbar from '../Navbar'
import '../../assets/styles/homepage.css'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import ReadBooks from '../ReadBooks'
import AddBooks from './AddBooks'
import Users from '../Users'
import AddUsers from '../Users/AddUsers'



const AdminPortal = () => {
  return (
       <> 
            <Navbar/>
        
            <Routes> 
               <Route element={<Home/>} path='/'/>
               <Route element={<Books/>} path='/books'/>
               <Route element={<ReadBooks/>} path='/readbooks/:id'/>
               <Route element={<AddBooks/>} path='/addbooks'/>
               <Route element={<Users/>} path='/users'/>
               <Route element={<AddUsers/>} path='/addusers'/>
            </Routes>
                            
       </>
  )
}

export default AdminPortal