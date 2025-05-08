import React, { useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const formData = useRef()
    const [emailErr, setemailErr] = useState('')
    const [passwordErr, setpasswordErr] = useState('')
    let navigate = useNavigate()

    let err = `border : solid 1px red ;
               background : rgba(255, 0, 0, 0.2) ;
               box-shadow : 0px 0px 10px red`

    let handleAdminForm = (e) =>{
        e.preventDefault() 
        let emailField = formData.current[0]
        let passwordField = formData.current[1]

        let credential = {
            email : "admin@gmail.com", 
            password : "admin123"
        }

        let {email , password} = credential
        let checkEmail = (emailField.value === email)
        let checkPassword = (passwordField.value === password)

        if(checkEmail && checkPassword){
           navigate('/adminportal')
        }else{
               if(emailField.value=== '' || emailField.value === null){
                  emailField.style.cssText = err
                  setemailErr(`invalid email`)
                 }else if(passwordField.value === '' || passwordField.value === null ){
                          passwordField.style.cssText = err 
                          setpasswordErr(`invalid password `)
                 }else if(emailField.value !== email){
                    emailField.style.cssText = err
                    setemailErr(`incorrect email Address`)

                 }else if(passwordField.value !== password){
                    passwordField.style.cssText = err
                    setpasswordErr(`incorrect password`)
                 }
        }
    }
  return (
    <>
         <div className="admin-login">
                   <form onSubmit={handleAdminForm} ref={formData}>
                      <input type="text"  placeholder='Enter email Address'/>
                      <span>{emailErr}</span>
                      <input type="password"  placeholder='Enter password'/>
                      <span>{passwordErr}</span>
                      <button>Admin Login</button>

                   </form> 
         </div> 
    
    </>
  )
}

export default AdminLogin