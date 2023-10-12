import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const HeroDetail = () => {
  const { id } = useParams();
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroDetail = async () => {
      try {
        const response = await axios.get(`https://localhost:5000/heroes/${id}`);
        setHero(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hero details:', error);
        setError('Failed to fetch hero details. Please try again later.');
        setLoading(false);
      }
    };

    fetchHeroDetail();
  }, [id]);

  return (
    <div>
      <h2>Hero Detail</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <h3>{hero.name}</h3>
          <p>Power: {hero.power}</p>
          {/* Add more hero details as needed */}
          <Link to="/heroes">Back to Hero List</Link>
        </>
      )}
    </div>
  );
};

export default HeroDetail;

