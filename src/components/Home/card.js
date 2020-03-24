// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import
import './home.scss';

// == Composant
const Card = ({
  thumbnail,
  title,
  difficulty,
}) => (
  <article className="card">
    <header>
      <img className="card-image" alt="img" src={thumbnail} />
    </header>
    <main className="card-info">
      <p className="card-title">{title}</p>
      <p className="card-difficulty">{difficulty}</p>
      <a className="card-link">Voir la recette</a>
    </main>
  </article>
);
Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};
// == Export
export default Card;
