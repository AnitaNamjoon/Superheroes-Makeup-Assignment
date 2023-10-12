import React from 'react';

const HeroesList = ({ heroes, onHeroClick }) => {
  return (
    <div>
      <h2>Heroes List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {heroes.map((hero, index) => (
            <tr key={index}>
              <td onClick={() => onHeroClick(hero)}>
                <strong>Name:</strong> {hero.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeroesList;
