import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({children}) => {
    const [data, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    const [book, setBook] = useState([]);
    const [bookName, setMessage] = useState([]);

    const handleAddToCart = (bookName) => {
       alert(`Has añadido "${bookName}" al carrito.`); 
      }; 
    const buyBooks = (book) => {
        const bookrepeat = cart.find((item) => item.id === book.id)
        if(bookrepeat) {
            setCart(cart.map((item) => (item.id === book.id ? {...book, cant: bookrepeat.cant + 1}   : item )))
        } else {
            setCart([...cart, book]);
          }
      }

    useEffect(() => {
        axios("books.json").then((res) => setBooks(res.data));
    }, []);

    return (
        <dataContext.Provider value={{ data, cart, setCart, book, setBook, buyBooks, handleAddToCart, setMessage}}>{children}</dataContext.Provider>
    )
};

export default DataProvider;