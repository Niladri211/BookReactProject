import React from 'react'
import '../assets/styles/navbar.css' 
import Logoimg from '../assets/images/book.jpg'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    let location = useLocation() 
    let bool = location.pathname.startsWith(`/adminportal`)
  return (
   <>    
        <div className="navbar">
            <div className="logo">
                <img src={Logoimg} alt="" />
            </div>
            <div className="links"> 
               {
                bool 
                ?
                <ul>
                    <li><NavLink to="/adminportal/">Home</NavLink></li>
                    <li><NavLink to="/adminportal/books">Books</NavLink></li>
                    <li><NavLink to="/adminportal/addbooks">Add Books</NavLink></li>
                    <li><NavLink to="/adminportal/users">Users</NavLink></li>
                    <li><NavLink to="/adminportal/addusers">Add Users</NavLink></li>
                    <li><NavLink to="/">Logout</NavLink></li> 
               </ul> 
               :
                <ul>
                    <li><NavLink to="/userportal/">Home</NavLink></li>
                    <li><NavLink to="/userportal/books">Books</NavLink></li>
                    <li><NavLink to="/userportal/users">Users</NavLink></li>
                    <li><NavLink to="/userportal/addcard">Add card</NavLink></li>
                    <li><NavLink to="/">Logout</NavLink></li>
                </ul>
                 
               }
            </div>

        </div>
   
   </>
  )
}

export default Navbar ;