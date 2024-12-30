import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Books from "../Books/Books";
import "./Home.css"

const Home = () => {
  return (
    <div>
        <NavBar />
        <Banner />
        <h2 className="book-card-container__text">Catálogo de Libros Nuevos</h2>
        <div className="book-card-container">
          <Books />
        </div>
        <Footer />
    </div>
  );
};

export default Home;
