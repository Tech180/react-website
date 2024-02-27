import React, { useState, useEffect } from 'react';

const Fruit = () => {
  const [fruits, setFruits] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await fetch('/fruits');
      
        // Log the status code and status text
        console.log('Response Body:', await response.text());

        console.log('Status Code:', response.status);
        console.log('Status Text:', response.statusText);
      
        // Log the response headers
        //console.log('Response Headers:', response.headers);
      
        // Log the response body
        const data = await response.json();
        //const data = await response.text();
        console.log('Response Body:', data);
      
        setFruits(data);
      } catch (error) {
        setError('Internal Server Error');
        console.error('Error fetching fruits:', error);
      }
    };

    fetchFruits();
  }, []);

  return (
    <div>
      <h1>Fruits</h1>
      {error && <p>{error}</p>}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fruit;
