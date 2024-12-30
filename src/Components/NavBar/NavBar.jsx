import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container">
        <nav className="nav-container-navbar">
            <Link className="nav-container-navbar__principal" to={'/books'}>🏠</Link>
            <Link className="nav-container-navbar__catalogo" to={'/catalogo'}>Catálogo</Link>
            <h1 className="nav-container-navbar__titulo">Libreria Relatos de Papel</h1>
            <Link className="nav-container-navbar__busqueda" to={"/search"}>🔎</Link>
            <Link className="nav-container-navbar__carrito" to={"/cart"}>🛒</Link>
        </nav>
    </div>
  )
}

export default NavBar;
