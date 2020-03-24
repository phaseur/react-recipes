// == imports npm
import React from 'react';
// librairie pour valider le type de chaque prop
import PropTypes from 'prop-types';

const HeaderRecipe = ({
  title,
  author,
  difficulty,
  thumbnail,
}) => (
  <header className="header-recipe">
    <img
      className="header-image"
      alt=""
      src={thumbnail}
    />
    <div className="header-content">
      <h1 className="header-title">{title}</h1>
      <p className="header-info">{author} - {difficulty}</p>
    </div>
  </header>
);

// je déclare le type de chaque prop pour pouvoir valider => un warning sera affiché
// dans la console si la valeur de la prop n'a pas le type indiqué
// https://fr.reactjs.org/docs/typechecking-with-proptypes.html
HeaderRecipe.propTypes = {
  // nom de la prop: type attendu
  // isRequired indique que la prop est obligatoire
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default HeaderRecipe;
