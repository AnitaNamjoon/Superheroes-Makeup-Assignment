// src/components/PowerList.js

import React from 'react';

const PowerList = ({ powers, onSelectPower }) => {
  return (
    <div>
      <h2>Powers List</h2>
      <ul>
        {powers.map((power, index) => (
          <li key={index}>
            <button onClick={() => onSelectPower(power)}>{power}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PowerList;
