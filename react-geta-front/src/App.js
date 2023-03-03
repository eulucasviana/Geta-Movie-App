import React from "react";
import Busca from "./Busca";
import "./App.css";
import "./Responsive.css";
import Favoritos from "./Favorite";

function App() {
  return (
    <div>
      <header className="header">
        <h2 className="header-content">GETAFLIX</h2>
      </header>
      <hr />

      <br />

      <container className="title-subtitle">
        <h1>Movies Search</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam totam
          consequatur, non fugiat ea harum ex, eligendi doloremque quisquam
          <br />
          error autem placeat voluptas nihil.
        </p>
        <Busca />
        <hr />
        <br />
        <br />
        <Favoritos />
      </container>
    </div>
  );
}

export default App;
