import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
  const [users, setusers] = useState([])
  const formdata = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    let userApi = async () => {
      let userdata = await axios.get('http://localhost:4000/users')
      setusers(userdata.data)
    }
    userApi()
  }, []) 

  let allUserEmail = () => users.map(elem => elem.email)

  let handlesubmit = (e) => {
    e.preventDefault()
    let inputValue = {
      emailVal: formdata.current[0].value,
      passwordVal: formdata.current[1].value,
    }

    let { emailVal, passwordVal } = inputValue
    let emailbool = allUserEmail().includes(emailVal)
    let passbool = (passwordVal === 'user123')


    if (emailbool && passbool) {
      navigate('/userportal') 
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <>
      <div className="user-login">
        <form ref={formdata} onSubmit={handlesubmit}>
          <input type="text" placeholder='Enter email Address' />
          <input type="password" placeholder='Enter password' />
          <button type='submit'>User Login</button>
        </form>
      </div>
    </>
  )
}

export default UserLogin