import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroDetailsModal from './HeroDetailsModal'; // Import the modal component

const HeroCard = ({ hero }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    if (hero.details.length > 0) {
      // Hero has detailed information, navigate to a new page
      // You can use React Router to define a route for detailed hero view
    } else {
      // Hero has minimal details, show the modal
      setShowModal(true);
    }
  };

  return (
    <div className="hero-card" onClick={handleCardClick}>
      <h3>{hero.name}</h3>
      <p>Power: {hero.power}</p>
      {/* Add more common hero details here */}
      <p>Alignment: {hero.alignment}</p>
      <p>Power Strength: {hero.powerStrength}</p>
      {/* Check if there are more details to display in a modal */}
      {showModal && (
        <HeroDetailsModal hero={hero} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default HeroCard;
