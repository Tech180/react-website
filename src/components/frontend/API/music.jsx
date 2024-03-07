import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Music = () => {
  const [lastSong, setLastSong] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/music');
        const lastPlayed = response.data;
        setLastSong(lastPlayed);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {lastSong ? (
        <div>
          <h2>Listening To...</h2>
          <p>Title: {lastSong.title}</p>
          <p>Artist: {lastSong.artist}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Music;
