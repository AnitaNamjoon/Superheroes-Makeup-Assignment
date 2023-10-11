import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const HeroDetail = () => {
  const { id } = useParams();
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroDetail = async () => {
      try {
        const response = await axios.get(`https://your-api-url.com/heroes/${id}`);
        setHero(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hero details:', error);
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
      ) : (
        <>
          <h3>{hero.name}</h3>
          <p>Power: {hero.power}</p>
          <Link to="/heroes">Back to Hero List</Link>
        </>
      )}
    </div>
  );
};

export default HeroDetail;
