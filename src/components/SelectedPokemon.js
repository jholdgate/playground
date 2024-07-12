import React from 'react';

const SelectedPokemon = ({ leftPokemon, rightPokemon }) => {
  return (
    <div className="selected-pokemon">
      <div className="pokemon-display">
        {leftPokemon && (
          <div className="pokemon-card">
            {/* <h3>{leftPokemon.name}</h3> */}
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${leftPokemon.id}.png`} alt={leftPokemon.name} />
          </div>
        )}
      </div>
      <div className="pokemon-display">
        {rightPokemon && (
          <div className="pokemon-card">
            {/* <h3>{rightPokemon.name}</h3> */}
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rightPokemon.id}.png`} alt={rightPokemon.name} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedPokemon;