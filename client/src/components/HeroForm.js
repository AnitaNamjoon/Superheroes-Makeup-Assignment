import React, { useState } from 'react';

function HeroForm() {
  const [formData, setFormData] = useState({
    strength: 5,
    power_id: 2,
    hero_id: 1,
  });

  const handleStrengthChange = (event) => {
    const strength = Number(event.target.value);
    setFormData({ ...formData, strength });
  };

  const handlePowerIdChange = (event) => {
    const power_id = Number(event.target.value);
    setFormData({ ...formData, power_id });
  };

  const handleHeroIdChange = (event) => {
    const hero_id = Number(event.target.value);
    setFormData({ ...formData, hero_id });
  };

  const handleSubmit = () => {
    // Send the formData to the Flask backend
    fetch('http://127.0.0.1:5555/hero_powers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response from server:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <div>
      <label>Strength: </label>
      <input
        type="number"
        value={formData.strength}
        onChange={handleStrengthChange}
      />
      <br />
      <label>Power ID: </label>
      <input
        type="number"
        value={formData.power_id}
        onChange={handlePowerIdChange}
      />
      <br />
      <label>Hero ID: </label>
      <input
        type="number"
        value={formData.hero_id}
        onChange={handleHeroIdChange}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default HeroForm;
