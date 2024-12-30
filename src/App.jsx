import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CartContent from "./Components/CartContent/CartContent";
import DataProvider from "./Components/Context/DataContext";
import BookDetails from "./Components/views/BookDetails"; 
import Landing from './Components/views/Landing';
import SearchForm from "./Components/SearchForm/SearchForm";
import CartCheckout from "./Components/Checkout/Checkout";
import "./Components/Hooks/useBooks";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/books" element={<Home />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="/search" element={<SearchForm />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/checkout" element={<CartCheckout />} />
          <Route path="/catalogo" element={<useBooks />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
