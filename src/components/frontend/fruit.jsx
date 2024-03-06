import React, { useState, useEffect } from 'react';

const Fruit = () => {
  const [fruit, setFruit] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await fetch('/api/fruits');
        const data = await response.json();

        // Randomly select a fruit from the list
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomFruit = data[randomIndex];

        setFruit(randomFruit);
      } 
      catch (error) {
        setError('Internal Server Error');
        console.error('Error fetching fruits:', error);
      }
    };

    fetchFruits();
  }, []);

  return (
    <div>
      <h1>Fruit Facts</h1>
      {error && <p>{error}</p>}
      {fruit && (
        <div>
          <p>Name: {fruit.name}</p>
          <p>Family: {fruit.family}</p>
          <p>Genus: {fruit.genus}</p>
          <p>Order: {fruit.nutritions.calories}</p>
        </div>
      )}
    </div>
  );
};

export default Fruit;
