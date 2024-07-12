import React, { useState, useRef, useEffect } from 'react';

const Rolodex = ({ items, onSelectPokemon, textAlign = 'left' }) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const rolodexRef = useRef(null);

  useEffect(() => {
    const rolodex = rolodexRef.current;

    const handleScroll = () => {
      const itemHeight = rolodex.scrollHeight / items.length;
      const visibleItems = Math.floor(rolodex.clientHeight / itemHeight);
      const middleOffset = Math.floor(visibleItems / 2);

      const newFocusedIndex = Math.floor(rolodex.scrollTop / itemHeight) + middleOffset;
      setFocusedIndex(newFocusedIndex);
    };

    rolodex.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set the correct focus
    return () => rolodex.removeEventListener('scroll', handleScroll);
  }, [items]);

  const handleClick = (item) => {
    onSelectPokemon(item);
  };

  return (
    <div className={`rolodex rolodex-${textAlign}`} ref={rolodexRef}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`rolodex-item ${index === focusedIndex ? 'focused' : ''}`}
          style={{ textAlign }}
          onClick={() => handleClick(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Rolodex;