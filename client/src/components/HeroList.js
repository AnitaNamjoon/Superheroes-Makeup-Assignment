import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HeroList = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.get('https://your-api-url.com/heroes');
        setHeroes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching heroes:', error);
        setLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  return (
    <div>
      <h2>Hero List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {heroes.map((hero) => (
            <li key={hero.id}>
              <Link to={`/heroes/${hero.id}`}>{hero.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeroList;
