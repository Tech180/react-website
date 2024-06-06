import { useState, useEffect } from 'react';
import axios from 'axios';

const PokeAPI = (name) => {
  const [data, setData] = useState(null);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/pokeapi/pokemon/${name.toLowerCase()}`);
        setData(response.data);
      } 
      catch (error) {
        console.error(`Error fetching ${name} data:`, error);
      }
    };

    fetchData();
  }, [name]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`/api/pokeapi/item/${item.toLowerCase()}`);
        setItem(response.data);
      } 
      catch (error) {
        console.error(`Error fetching ${item} data:`, error);
      }
    };

    fetchItem();
  }, [item]);

  return { data, item };
};

export default PokeAPI;
