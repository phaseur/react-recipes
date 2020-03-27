// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import slugify from 'slugify';
// == Import
import './header.scss';

// == Composant
const Header = ({ datas }) => (
  <header className="header">
    <nav>
      <ul className="nav-list">
        <li className="nav-item"><NavLink activeClassName="nav-item-active" to="/" exact>Accueil</NavLink></li>
        {datas.map((recipe) => (
          <NavLink
            key={recipe.id}
            className="nav-item"
            activeClassName="nav-item-active"
            to={`/recipes/${slugify(recipe.title,
              { lower: true })}`}
            exact
          >
            {recipe.title}
          </NavLink>
        ))}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
// == Export
export default Header;
