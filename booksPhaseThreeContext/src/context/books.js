import { createContext, useState, useCallBack } from "react";
import axios from 'axios';
import { useCallback } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  },[]);


  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books',{
        title : title
    });


    const updatedBooks = [
      ...books,
      response.data
    ];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);    
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updateBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
        title : newTitle
    });      

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data};
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const valueToShare = {
      books: books,
      fetchBooks: fetchBooks,
      editBookById: editBookById,
      deleteBookById: deleteBookById,
      createBook: createBook
  }

  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
