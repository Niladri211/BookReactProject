import React, { useEffect, useState } from 'react';
import '../assets/styles/books.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Books = () => { 

  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith(`/adminportal`);

  useEffect(() => {
    const fetchApi = async () => {
      try {
      const response = await fetch(`http://localhost:4000/books`);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };

    fetchApi();
  }, [books]);

  const readBooks = (id) => {
    if (isAdmin) {
      navigate(`/adminportal/readbooks/${id}`);
    } else {
      navigate(`/userportal/readbooks/${id}`);
    }
  };

  const deleteBtn = async (id, title) => {
    const confirmDelete = window.confirm(`Do you want to delete the book: ${title}?`);
    if (confirmDelete) {
      try {
        await fetch(`http://localhost:4000/books/${id}`, { method: 'DELETE' });
        alert(`${title} has been deleted.`);
      
        setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
      } catch (error) {
        console.error("Delete failed:", error);
      }
    } else {
      alert(`Cancelled deletion of ${title}.`);
    }
  };

  return (
    <div className="books-box">
      <div className="header">
        <h1>Books</h1>
      </div>

      <div className="container-box">
        {books.map((book) => {
          const { id, title, thumbnailUrl, authors } = book;
          return (
            <div className="card-item" key={id}>
              <div className="image">
                <img src={thumbnailUrl} alt={title} />
              </div>
              <div className="title">{title}</div>
              <div className="authors">{authors}</div>
              <div className="btn">
                <button className="read" onClick={() =>{readBooks(id)}}>Show more</button>
                {isAdmin && (
                  <button className="delete" onClick={() => deleteBtn(id, title)}>Delete</button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
