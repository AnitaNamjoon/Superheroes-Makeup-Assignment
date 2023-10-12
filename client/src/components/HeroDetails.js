import React from 'react';
import './HeroDetails.css';
import 'animate.css';

const HeroDetails = ({ hero }) => {
  if (!hero) {
    return (
      <div className="hero-details-container">
        <h2 className="hero-title">Superheroes</h2> {/* Change this line */}
        <p className="hero-description">No hero selected</p>
        <p className="hero-description animate__animated animate__fadeIn"></p>
      </div>
    );
  }

  return (
    <div className="hero-details-container">
      <img className="hero-image" src={hero.image} alt={hero.name} />
      <h2 className="hero-name">{hero.name}</h2>
      <div className="hero-description">
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
    </div>
  );
};

export default HeroDetails;

