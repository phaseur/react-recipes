import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({ name, unit, quantity }) => (
  <li className="ingredient">
    <span className="quantity">{quantity} {unit}</span> {name}
  </li>
);

Ingredient.propTypes = {
  quantity: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Ingredient;