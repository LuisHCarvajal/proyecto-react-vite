import CartItems from "./CartItems"
import "./CartContent.css"
import  CartTotal  from "./CartTotal"
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartContent = () => {
  const {cart} = useContext(dataContext)
  return(
    <>
      <NavBar />
      <h2 id="titulo-carrito">Su carrito de Compras</h2>
      {cart.length > 0 ? (
        <>
          <CartItems />
          <CartTotal/>
        </> 
        ) : (
            <h2 className="mensaje-carrito-vacio">Su carrito está vacio</h2>
        )
      }
      <div id="botones">
        <Link to="/books"> 
          <button className="botones-carrito-regreso">Retornar al Menú</button>
        </Link>
        <Link to="/checkout"> 
          <button className="botones-carrito-checkout">Checkout y Pagar</button>
        </Link>
      </div>
    </>
  );
};

export default CartContent;
