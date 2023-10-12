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

      const newHero = await response.json();
      setHeroes([...heroes, newHero]);

      console.log('Superhero created successfully!');
    } catch (error) {
      console.error('Error creating superhero:', error);
    }
  }

  const handleHeroClick = (hero) => {
    setSelectedHero(hero);
  };

  useEffect(() => {
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

  useEffect(() => {
    async function fetchHeroDetails() {
      try {
        if (selectedHero) {
          const response = await fetch(`${apiUrl}/heroes/${selectedHero.id}`);
          if (response.ok) {
            const data = await response.json();
            setSelectedHero({ ...selectedHero, ...data });
          } else {
            console.error('Failed to fetch hero details:', response.status, response.statusText);
          }
        }
      } catch (error) {
        console.error('Error fetching hero details:', error);
      }
    }

    fetchHeroDetails();
  }, [selectedHero]);

  return (
    <div>
      <h1>Hero Details</h1>
      <HeroForm onSubmit={handleFormSubmit} availablePowers={availablePowers} />
      <HeroesList heroes={heroes} onHeroClick={handleHeroClick} />
      <HeroDetails hero={selectedHero} />
    </div>
  );
}

export default App;

