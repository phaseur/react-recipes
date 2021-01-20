import React from 'react';
import PropTypes from 'prop-types';
import HeaderRecipe from 'src/components/HeaderRecipe';
import Ingredients from 'src/components/Ingredients';
import Steps from 'src/components/Steps';
import './recipe.scss';

// Ingredients sert de passe-plat pour fournir l'ingrédient à Ingredient
// ... => spread operator, on déverse tout ce qui est dans ingredient
// {...ingredient} => je fournis name, quantity, unit, id
// {ingredient} => je fournis un objet
const Recipe = ({ item }) => (
  <>
    <HeaderRecipe {...item} />
    <Ingredients {...item} />
    <Steps {...item} />
  </>
);

Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Recipe;
