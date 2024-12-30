import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({book}) => {
  const { cart, setCart, buyBooks } = useContext(dataContext);

  const decrementar = () => {
    const bookrepeat = cart.find((item) => item.id === book.id)
    bookrepeat.cant !== 1 &&
    setCart(cart.map((item) => (item.id === book.id ? {...book, cant: bookrepeat.cant - 1}   : item )))
    }

  return (
    <>
        <p className="counter-button" onClick={decrementar}>
            -
        </p>
        <p>{book.cant}</p>
        <p className="counter-button" onClick={() => buyBooks(book)}>
            +
        </p>
    </>
  )
}

export default CartItemCounter
