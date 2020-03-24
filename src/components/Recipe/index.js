import React from 'react';
import PropTypes from 'prop-types';
import HeaderRecipe from 'src/components/HeaderRecipe';
import Ingredients from 'src/components/Ingredients';
import './recipe.scss';

// Ingredients sert de passe-plat pour fournir l'ingrédient à Ingredient
// ... => spread operator, on déverse tout ce qui est dans ingredient
// {...ingredient} => je fournis name, quantity, unit, id
// {ingredient} => je fournis un objet
const Recipe = ({ data }) => (
  <>
    <HeaderRecipe {...data[0]} />
    <Ingredients {...data[0]} />
  </>
);

Recipe.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default Recipe;
