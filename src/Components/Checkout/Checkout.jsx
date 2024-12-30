import React, { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Checkout.css";
import NavBar from "../NavBar/NavBar";

const Checkout = () => {
  const { cart, setCart } = useContext(dataContext);

  // Limpiar el carrito
  const clearCart = () => setCart([]);

  // Manejar el pago
  const handlePayment = () => {
    alert("¡Gracias por tu compra!");
    clearCart();
  };

  return (
    <div className="checkout-container">
      <NavBar />
      <h2>Resumen de tu compra</h2>
      {cart.length === 0 ? (
        <p>No tienes libros en tu carrito.</p>
      ) : (
        <div>
          <ul className="checkout-list">
            {cart.map((book) => (
              <li key={book.id} className="checkout-item">
                <p><strong>Nombre:</strong> {book.nombre}</p>
                <p><strong>Autor:</strong> {book.autor}</p>
                <p><strong>Precio:</strong> ${book.precio}</p>
              </li>
            ))}
          </ul>
          <button className="checkout-button" onClick={handlePayment}>
            Proceder al Pago
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
