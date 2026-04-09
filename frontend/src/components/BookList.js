import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:5000/books');
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const borrowBook = async (id) => {
    try {
      await axios.post(`http://localhost:5000/books/borrow/${id}`);
      fetchBooks();
    } catch (err) {
      alert("No copies available");
    }
  };

  const returnBook = async (id) => {
    await axios.post(`http://localhost:5000/books/return/${id}`);
    fetchBooks();
  };

  return (
    <div>
      {books.map(book => (
        <div key={book.id} style={{
          border: "1px solid #ccc",
          margin: "10px",
          padding: "10px",
          borderRadius: "8px"
        }}>
          <h3>{book.title}</h3>
          <p>Available: {book.available_copies}</p>

          <button onClick={() => borrowBook(book.id)}>
            Borrow
          </button>

          <button onClick={() => returnBook(book.id)} style={{ marginLeft: "10px" }}>
            Return
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookList;