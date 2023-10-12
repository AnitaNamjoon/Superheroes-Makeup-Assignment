import React, { useState, useEffect } from 'react';
import HeroForm from './components/HeroForm';
import HeroesList from './components/HeroesList';
import HeroDetails from './components/HeroDetails';

const apiUrl = 'http://localhost:5000'; 

function App() {
  const [heroes, setHeroes] = useState([]);
  const [selectedHero, setSelectedHero] = useState(null);
  const availablePowers = ['Super Strength', 'Flight', 'Telekinesis', 'Invisibility', 'Teleportation'];

  const handleFormSubmit = async (values) => {
    try {
      const response = await fetch(`${apiUrl}/heroes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the hero');
      }

      // Assuming the server responds with the newly created hero
      const newHero = await response.json();

      // Update the heroes list with the new hero
      setHeroes([...heroes, newHero]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleHeroClick = (hero) => {
    setSelectedHero(hero);
  };

  useEffect(() => {
    // Fetch the list of heroes from the server when the component mounts
    async function fetchHeroes() {
      try {
        const response = await fetch(`${apiUrl}/heroes`);
        if (response.ok) {
          const data = await response.json();
          setHeroes(data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchHeroes();
  }, []);

  return (
    <div>
      <HeroForm onSubmit={handleFormSubmit} availablePowers={availablePowers} />
      <HeroesList heroes={heroes} onHeroClick={handleHeroClick} />
      <HeroDetails hero={selectedHero} />
    </div>
  );
}

export default App;
