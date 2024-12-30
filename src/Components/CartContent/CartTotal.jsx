import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css";

const CartTotal = () => {
    const { cart } = useContext(dataContext);
    const total = cart.reduce((acum, item) => acum + item.precio * item.cant, 0);
  return (
    <div className="cartTotal">
      <h3>Total a Pagar: $ {total}</h3>
    </div>
  );
};

export default CartTotal;
