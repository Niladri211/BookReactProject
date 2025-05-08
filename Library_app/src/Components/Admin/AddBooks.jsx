import React, { useRef } from 'react'
import '../../assets/styles/addbook.css'

const AddBooks = () => {

    let formBook= useRef()

    let handlesubmit= (e)=>{
        e.preventDefault()
        let newBooks = {
            title : formBook.current[0].value,
            isbn : formBook.current[1].value,
            pageCount : formBook.current[2].value,
            thumbnailUrl : formBook.current[3].value,
            shortDescription : formBook.current[4].value,
            longDescription : formBook.current[5].value,
            status : formBook.current[6].value,
            authors : formBook.current[7].value,
            categories : formBook.current[8].value,
        }

       fetch(`http://localhost:4000/books` , {
        method : 'POST', 
        headers : {'content-Type' : 'aplication/json'},
        body : JSON.stringify(newBooks)
       })
    

    }
  return (
    <>
       <div className="addBooks">
            <div className="header">
                <h2>Add new Books</h2>
            </div>
            <div className="container">
                <div className="form-box"> 
                    <form ref={formBook} onSubmit={handlesubmit}>
                          <input type="text"  placeholder='Enter books title'/>
                          <input type="text"  placeholder='Enter reg No.'/>
                          <input type="text"  placeholder='Enter PageCount'/>
                          <input type="text"  placeholder='Enter image  url'/>
                          <input type="text"  placeholder='Enter short description'/>
                          <input type="text"  placeholder='Enter Long description'/>
                          <input type="text"  placeholder='Enter Status'/>
                          <input type="text"  placeholder='Enter authors Name'/>
                          <input type="text"  placeholder='Enter catagories'/>
                          <button>Add Books</button>
                    </form>
                </div>
            </div>
       </div>
    
    
    </>
  )
}

export default AddBooks