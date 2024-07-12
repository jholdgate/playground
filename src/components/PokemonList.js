import React, { useState, useEffect } from 'react';
import Rolodex from './Rolodex';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      setPokemon(data.results.map(p => p.name));
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  return (
    <div className="pokemon-list">
      <Rolodex items={pokemon} />
    </div>
  );
};

export default PokemonList;