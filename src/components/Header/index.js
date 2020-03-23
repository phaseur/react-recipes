// == Import npm
import React from 'react';
// == Import
import './header.scss';

// == Composant
const Header = () => (
  <header className="header">
    <nav className="nav-list">
      <li className="nav-item"><a>Accueil</a></li>
      <li className="nav-item"><a>Something</a></li>
      <li className="nav-item"><a>Crepes</a></li>
      <li className="nav-item"><a>Jambon</a></li>
      <li className="nav-item"><a>Fromage</a></li>
      <li className="nav-item"><a>Porc</a></li>
    </nav>
  </header>
);

// == Export
export default Header;
