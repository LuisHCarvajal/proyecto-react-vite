import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Books.css";
import { Link } from "react-router-dom"; 
const Books = () => {
  const { data, buyBooks } = useContext(dataContext);
  const { handleAddToCart }= useContext(dataContext);
     
  return data.map((book) => {
    return (
      <div className="card" key={book.id}>
        <img className="card-imagenlibro" src={book.img} alt="img-book-card" />
        <h4>{book.nombre}</h4>
        <h4>{book.autor}</h4>
        <h5>$ {book.precio}</h5>
       
        <Link to={`/books/${book.id}`}>
          <button className="button-detalles">Ver detalles</button>
        </Link>
        <button className="button-carrito" onClick={() => {
          buyBooks(book),
          handleAddToCart(book.nombre)
        }}>
          Añadir al carrito
        </button>
      </div>
    );
  });
};

export default Books;
