import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css";
import CartItemCounter from "./CartItemCounter";

const CartItems = () => {
    const { cart, setCart } = useContext(dataContext);

    const deleteItems = (id) => {
      const foundId = cart.find((item) => item.id === id)

      const newCart = cart.filter((item) => {
        return item !== foundId
      })
      setCart(newCart)
    }   
  return cart.map((book) => {
    return (
        <div className="cartContent" key={book.id}>
            <img src={book.img} alt="book-card" />
            <h3 className="cartContent-nombre">{book.nombre}</h3>
            <CartItemCounter book={book} />
            <h4 className="cartContent-precio">$ {book.precio * book.cant}</h4>
            <h3 className="cartContent-delete" onClick={() =>deleteItems(book.id)}>❌</h3>
        </div>
    );
  });
 };

export default CartItems
