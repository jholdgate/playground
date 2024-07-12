import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/showdownButton.css';

const ShowdownButton = ({ pokemonIds }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Pass left and right selected pokemon
    const idString = pokemonIds.join(',');
    navigate(`/showdown/${idString}`);
  };

  return (
    <button onClick={handleClick} className="showdown-button">
      Start Showdown
    </button>
  );
};

export default ShowdownButton;