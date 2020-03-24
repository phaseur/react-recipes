// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import slugify from 'slugify';
// == Import
import './home.scss';

// == Composant
const Card = ({
  thumbnail,
  title,
  difficulty,
}) => {
  let link = slugify(`${title}`, { lower: true });
  link = `recipes/${link}`;
  return (
    <article className="card">
      <header>
        <img className="card-image" alt="img" src={thumbnail} />
      </header>
      <main className="card-info">
        <p className="card-title">{title}</p>
        <p className="card-difficulty">Difficulté : {difficulty}</p>
        <NavLink className="card-link" to={link}>Voir la recette</NavLink>
      </main>
    </article>
  );
};
Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};
// == Export
export default Card;
