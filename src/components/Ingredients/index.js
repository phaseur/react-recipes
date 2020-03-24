import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient';
import './ingredients.scss';

// Ingredients sert de passe-plat pour fournir l'ingrédient à Ingredient
// ... => spread operator, on déverse tout ce qui est dans ingredient
// {...ingredient} => je fournis name, quantity, unit, id
// {ingredient} => je fournis un objet
const Ingredients = ({ ingredients }) => (
  <ul className="ingredients">
    {ingredients.map((ingredient) => (
      <Ingredient
        key={ingredient.id}
        {...ingredient}
      />
    ))}
  </ul>
);

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default Ingredients;
