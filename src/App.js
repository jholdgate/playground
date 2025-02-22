import './style/App.css';
import './style/rolodex.css';
import './style/selectedPokemon.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import './style/header.css';
import Rolodex from './components/Rolodex';
import SelectedPokemon from './components/SelectedPokemon';
import ShowdownButton from './components/ShowdownButton';
import './style/showdownButton.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [leftSelectedPokemon, setLeftSelectedPokemon] = useState(null);
  const [rightSelectedPokemon, setRightSelectedPokemon] = useState(null);

const resetPage = () => {
    setLeftSelectedPokemon(null);
    setRightSelectedPokemon(null);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      setPokemonList(data.results.map((pokemon, index) => ({
        ...pokemon,
        id: index + 1
      })));
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  return (
    <div className="app">
    <div className="home-page">
      <Header resetPage={resetPage} />
      <ShowdownButton />
      <div className="left-side">
        <Rolodex
          items={pokemonList}
          onSelectPokemon={setLeftSelectedPokemon}
          textAlign="right"
        />
      </div>
      <div className="content">
        <SelectedPokemon
          leftPokemon={leftSelectedPokemon}
          rightPokemon={rightSelectedPokemon}
        />
      </div>
      <div className="right-side">
        <Rolodex
          items={pokemonList}
          onSelectPokemon={setRightSelectedPokemon}
          textAlign="left"
        />
      </div>
    </div>
    </div>
  );
};
export default App;
