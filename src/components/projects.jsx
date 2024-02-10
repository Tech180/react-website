import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Marowak = () => {
  const [marowakData, setMarowakData] = useState(null);

  useEffect(() => {
    const fetchMarowakData = async () => {
      try {
        // Fetch Marowak data
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/marowak');
        setMarowakData(response.data);
      } catch (error) {
        console.error('Error fetching Marowak data:', error);
      }
    };

    fetchMarowakData();
  }, []);

  return (
    <div>
      <h1>Marowak</h1>
      {marowakData && (
        <div>
          <img src={marowakData.sprites.front_default} alt="Marowak" />
          <h2>Abilities:</h2>
          <ul>
            {marowakData.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Marowak;
