import React, { useState } from "react";
import axios from "axios";

// API KEY DO PROJETO GETA
const apikeygeta = "a9a2f2a8";

const Busca = () => {
  const [busca, setBusca] = useState("");
  const [filme, setFilme] = useState({});
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );

  const buscarFilme = async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?t=${busca}&apikey=${apikeygeta}`
    );
    setFilme(response.data);
  };

  const favoritarFilme = () => {
    const novoFavorito = { titulo: filme.Title, poster: filme.Poster };
    setFavoritos([...favoritos, novoFavorito]);
    localStorage.setItem(
      "favoritos",
      JSON.stringify([...favoritos, novoFavorito])
    );
  };

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Digite aqui o nome do filme"
      />
      <button className="button-search" onClick={buscarFilme}>
        Search
      </button>
      <button className="button-reset" onClick={() => setBusca("")}>
        Reset
      </button>
      {filme.Title && (
        <div>
          <h2 className="filme-title">{filme.Title}</h2>
          <p className="filme-subtitle">{filme.Plot}</p>
          <p className="filme-actors">
            <strong>Actors: </strong> {filme.Actors}
          </p>
          <img
            height="200px"
            className="filme-poster"
            src={filme.Poster}
            alt={filme.Title}
          />
          <button className="favorite-button" onClick={favoritarFilme}>
            Favorite
          </button>
        </div>
      )}
    </div>
  );
};

export default Busca;
