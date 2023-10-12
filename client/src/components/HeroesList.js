import React from 'react';

const HeroesList = ({ heroes }) => {
  return (
    <div>
      <h2>Heroes List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Power</th>
          </tr>
        </thead>
        <tbody>
          {heroes.map((hero, index) => (
            <tr key={index}>
              <td><strong>Name:</strong> {hero.name}</td>
              <td><strong>Power:</strong> {hero.power}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul>
        {heroes.map((hero, index) => (
          <li key={index}>
            <strong>Name:</strong> {hero.name}, <strong>Power:</strong> {hero.power}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroesList;

