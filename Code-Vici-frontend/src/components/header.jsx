// Header.js

import React from 'react';
import './header.css';

function Header() {
  return (
    <header>
      <h1>Code-Vici</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Matches</a></li>
          <li><a href="#">Rating</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
