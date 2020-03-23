import React from 'react';
import PropTypes from 'prop-types';

import './steps.scss';

const Steps = ({ steps }) => (
  <ul className="steps">
    {steps.map((step) => (
      <li key={step} className="step">
        {step}
      </li>
    ))}
  </ul>
);

Steps.propTypes = {
  // tableau de chaîne de caractères
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Steps;
