import React from 'react'
import '../../assets/styles/addusers.css'
import { useRef } from 'react'

const AddUsers = () => {

     const infoData = useRef()

     let handleSubmit =(e) =>{
        e.preventDefault() 
       let  newInfo = {
            firstName : infoData.current[0].value ,
            lastName : infoData.current[1].value ,
            contact : infoData.current[2].value ,
            email  : infoData.current[3].value ,
            password : infoData.current[4].value ,
            dob  : infoData.current[5].value ,
            age : infoData.current[6].value ,
            place : infoData.current[7].value ,
        }

        fetch(`http://localhost:4000/users` , {
            method : 'POST', 
            headers : {'content-Type' : 'aplication/json'},
            body : JSON.stringify(newInfo)
           })
     }
   

  return (
    <>   
     <div className="addusers">
        <div className="header">
            <h2>Add Users Details </h2>
        </div>
        <div className="container">
            <div className="form-box">
                <form action="" ref={infoData} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter First Name' />
                    <input type="text" placeholder='Enter Last Name ' />
                    <input type="text" placeholder='Enter Contact' />
                    <input type="text" placeholder='Enter Email ' />
                    <input type="text" placeholder='Enter Password' />
                    <input type="date" placeholder='Enter Date of Birthday' />
                    <input type="taxt" placeholder='Enter Age' />
                    <input type="text" placeholder='Enter place' />

                    <button>Add user Detalis </button>
                 
                </form>
            </div>
        </div>
     </div>
    
    </>
  )
}

export default AddUsers