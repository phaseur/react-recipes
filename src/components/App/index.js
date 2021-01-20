/* eslint-disable react/jsx-max-props-per-line */
// == Import npm
import React, { useEffect } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
// == Import
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import Recipe from 'src/components/Recipe';
import slugify from 'slugify';
import './app.scss';

// == Composant
const App = ({ datas, fetchRecipes }) => {
  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <div className="app">
      <Header />
      <div className="main-site">
        <h1 className="title">iCook</h1>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {datas.map((item) => (
            <Route
              key={item.title}
              exact path={`/recipes/${slugify(item.title, { lower: true })}`}
            >
              <Recipe key={item.id} item={item} />
            </Route>
          ))}
          <Route>
            <div>404 bro</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
App.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  fetchRecipes: PropTypes.func.isRequired,
};
// == Export
export default App;
