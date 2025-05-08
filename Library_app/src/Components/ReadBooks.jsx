import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../assets/styles/readBook.css';

const ReadBooks = () => {
  let  params  = useParams();
  let bookId = params.id
  const [showDescription, setShowDescription] = useState(false);
  const [singleBook, setSingleBook] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  let pathBool = location.pathname.startsWith('/adminportal');

  useEffect(() => {
    let fetchBook = async () => {
      let res = await fetch(`http://localhost:4000/books/${bookId}`);
      let book = await res.json();
      setSingleBook(book);
    };
    fetchBook();
  }, []);

  const showdata = () => {
    setShowDescription(!showDescription);
  };

  const backbtn = () => {
    pathBool
      ? navigate(`/adminportal/books`)
      : navigate(`/userportal/books`);
  };

  const addtocart = () => {
    let cartBool = window.confirm(`Do you want to add this book to your cart?`);
    if (cartBool) {
      fetch(`http://localhost:4000/cartitems`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(singleBook)
      });
    } else {
      alert(`This book was not added.`);
    }
  };

  const { title, isbn, pageCount, thumbnailUrl, longDescription, status, authors, categories } = singleBook;

  return (
    <div className="readbooks">
      <div className="header">
        <h1>{title}</h1>
      </div>

      <div className="book-container">
        <div className="left">
          <img src={thumbnailUrl} alt={title} />
          <h2 className="book-title">{title}</h2>
        </div>

        <div className="right">
          <div className="info-item"><strong>ISBN:</strong> {isbn}</div>
          <div className="info-item"><strong>Page Count:</strong> {pageCount}</div>
          <div className="info-item"><strong>Status:</strong> {status}</div>
          <div className="info-item"><strong>Authors:</strong> {authors?.join(', ')}</div>
          <div className="info-item"><strong>Categories:</strong> {categories?.join(', ')}</div>

          <button onClick={showdata} className="toggle-btn">
            {showDescription ? 'Hide Description' : 'Show Description'}
          </button>

          {showDescription && (
            <div className="description">
              <h3>Description</h3>
              <p>{longDescription}</p>
            </div>
          )}

          <div className="btn-group">
            <button onClick={backbtn}>Back</button>
            <button onClick={addtocart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;