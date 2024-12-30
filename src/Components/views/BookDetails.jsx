import React, { useContext } from "react";
import { useParams } from "react-router-dom"; 
import { dataContext } from "../Context/DataContext";
import "./BookDetails.css"
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const BookDetails = () => {
  const { bookId } = useParams(); 
  const { data } = useContext(dataContext);
  const {buyBooks} = useContext(dataContext);

  
  const book = data.find((r) => r.id === parseInt(bookId,10));

  if (!book) {
    return <h2>Libro no encontrado</h2>;
  }

  return (
    <div className="books-details">
      <NavBar />
      <img className="books-details-img" src={book.img} alt="imagen-libro" /> 
      <h2 className="books-details-nombre">Nombre Libro: {book.nombre}</h2>
      <p className="books-details-autor">Autor: {book.autor}</p>
      <p className="books-details-genero">Género: {book.genero}</p>
      <p className="books-details-editorial">Editorial: {book.editorial}</p>
      <p className="books-details-resumen">Resumen: {book.resumen}</p>
      <p className="books-details-precio">Precio:  ${book.precio}</p>
      <p className="books-details-cantidad">Cantidad: {book.cant}</p>
      <Link to="/books"> 
      <button className="books-details-regreso">Regresar Menú</button>
      </Link>
      <button className="books-details-carrito" onClick={() => buyBooks(book)}>
          Añadir al carrito
        </button>
    </div>
  );
};

export default BookDetails;
