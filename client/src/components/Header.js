import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/heroes">Hero List</Link></li>
          <li><Link to="/add-hero">Add Hero</Link></li>
          <li><Link to="/remove-hero">Remove Hero</Link></li>
          
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
