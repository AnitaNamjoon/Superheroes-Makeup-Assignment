// src/components/HeroDetails.js

import React from 'react';

const HeroDetails = ({ hero }) => {
  if (!hero) {
    return (
      <div>
        <h2>Hero Details</h2>
        <p>No hero selected</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Hero Details</h2>
      <p>Name: {hero.name || 'N/A'}</p>
      <p>Power: {hero.power || 'N/A'}</p>
    </div>
  );
};

export default HeroDetails;
