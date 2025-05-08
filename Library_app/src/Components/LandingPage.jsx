import React, { useState } from 'react'
import '../assets/styles/landingpage.css'
import AdminLogin from './Admin/AdminLogin'
import UserLogin from './Users/UserLogin'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  const[bool,setbool]=useState(true)
  
  let handletoggle=()=>{
    setbool(!bool)
  }

  return (
    <div className="landingpage">
        <div className="container">
           <div className="btn-box">
            <button onClick={handletoggle}
            className={bool? "left-btn":"ryt-btn"}>
              {bool?"Admin Login":"User Login"}
            </button>
           </div>
           <div className="heading">
            <h2>{bool ? "Admin Login":"User Login"}</h2>
           </div>
           <div className="form-box">
             {
              bool ? <AdminLogin/> : <UserLogin/>
             }
           </div>
           <div className="Forgotten-password">
        <Link to='/forget'>Forgotten password</Link>
        </div>

        </div>
       
    </div>

  )
}

export default LandingPage