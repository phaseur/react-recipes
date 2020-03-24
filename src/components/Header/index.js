// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import slugify from 'slugify';
// == Import
import './header.scss';

// == Composant
const Header = ({ items }) => (
  <header className="header">
    <nav className="nav-list">
      <li className="nav-item"><NavLink to="/">Accueil</NavLink></li>
      {items.map((recipe) => (
        <NavLink
          key={recipe.id}
          className="nav-item"
          to={`/recipes/${slugify(recipe.title,
            { lower: true })}`}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  </header>
);

Header.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
// == Export
export default Header;
