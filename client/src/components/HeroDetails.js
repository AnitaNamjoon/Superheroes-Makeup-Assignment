import React from 'react';
import './HeroDetails.css';

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
      <p>Name: {hero.name}</p>
      {hero.powers ? (
        <div>
          <p>Power:</p>
          <ul>
            {hero.powers.map((power) => (
              <li key={power.id}>{power.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No powers available</p>
      )}
    </div>
  );
};

export default HeroDetails;
