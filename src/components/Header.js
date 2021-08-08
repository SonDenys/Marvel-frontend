import logo from "../assets/img/logo-marvel.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Header = ({ setSearch }) => {
  return (
    <section className="Header">
      <img src={logo} alt="logo-marvel" />
      <input
        type="text"
        className="search-input"
        placeholder="Rechercher des personnages"
        onChange={(event) => setSearch(event.target.value)}
      />
      <div className="menu">
        <Link to={`/characters`}>
          <button>Personnages</button>
        </Link>
        <Link to={`/comics`}>
          <button>Comics</button>
        </Link>
        <button>Favorites</button>
      </div>
    </section>
  );
};

export default Header;
