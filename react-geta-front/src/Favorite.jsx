import React, { useState } from "react";

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );

  const removerFavorito = (titulo) => {
    const novosFavoritos = favoritos.filter(
      (favorito) => favorito.titulo !== titulo
    );
    setFavoritos(novosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
  };

  return (
    <div className="favorite-movies">
      <h1>My Favorite Movies:</h1>
      {favoritos.length > 0 ? (
        <ul>
          {favoritos.map((favorito, index) => (
            <li key={index}>
              <img
                className="favorite-films"
                src={favorito.poster}
                alt={favorito.titulo}
              />
              <button
                className="remove-button"
                onClick={() => removerFavorito(favorito.titulo)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum filme foi favoritado.</p>
      )}
    </div>
  );
};

export default Favoritos;
