import React, { useState } from "react";
import "./SearchForm.css"

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Buscando:", searchQuery);
    // Aquí puedes manejar la lógica de búsqueda
  };

  return (
    <form className="d-flex" role="search" onSubmit={handleSearch}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Buscar"
        aria-label="Buscar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;
