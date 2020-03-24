import React from 'react';
import PropTypes from 'prop-types';

import './steps.scss';

const Steps = ({ instructions }) => (
  <ul className="steps">
    {instructions.map((step) => (
      <li key={step} className="step">
        {step}
      </li>
    ))}
  </ul>
);

Steps.propTypes = {
  // tableau de chaîne de caractères
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Steps;
