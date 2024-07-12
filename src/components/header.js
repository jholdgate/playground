import React from 'react';
import '../style/header.css';


const header = ({ resetPage }) => {
    return (
      <header className="app-header">
        <h1>Pokémon Showdown</h1>
        <nav>
          <ul>
            <li><a href="/" onClick={(e) => {
              e.preventDefault();
              resetPage();
            }}>Reset</a></li>
            <li><a href="/about">Directions</a></li>
            <li><a href="/contact">Details</a></li>
          </ul>
        </nav>
      </header>
    );
  };

export default header;