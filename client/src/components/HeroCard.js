import React from 'react';

const HeroCard = ({ hero }) => {
  return (
    <div className="hero-card">
      <h3>{hero.name}</h3>
      <p>Power: {hero.power}</p>
      <p>Alias: {hero.alias}</p>
      <p>Origin: {hero.origin}</p>
      <p>Alignment: {hero.alignment}</p>
      <p>Power Strength: {hero.powerStrength}</p>
      {/* Add more hero details as needed */}
    </div>
  );
};

export default HeroCard;
