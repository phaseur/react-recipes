// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
  link = `/recipes/${link}`;
  return (
    <article className="card">
      <header>
        <img className="card-image" alt="img" src={thumbnail} />
      </header>
      <main className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-difficulty">Difficulté : {difficulty}</p>
        <Link className="card-link" to={link}>Voir la recette</Link>
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
