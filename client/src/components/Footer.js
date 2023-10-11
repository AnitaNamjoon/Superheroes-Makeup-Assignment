// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Your Company Name
      </div>
      <div className="social-media-links">
        
        <a href="https://www.britannica.com/topic/list-of-superheroes-2024795" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-britannica"></i>
        </a>
        <a href="https://www.marvel.com/comics/characters" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-marvel"></i>
        </a>
       
      </div>
    </footer>
  );
};

export default Footer;

