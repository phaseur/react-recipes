// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';
// == Import
import './home.scss';

// == Composant
const Home = ({ data }) => (
  <main className="home">
    <h1>Bienvenue sur mon site de cuisine. Régalez-vous</h1>
    <div className="card-list">
      {data.map((recipe) => (
        <Card key={recipe.id} {...recipe} />
      ))}
    </div>
  </main>
);
Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};
// == Export
export default Home;
