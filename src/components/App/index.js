// == Import npm
import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
// == Import
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import data from 'src/data';
import './app.scss';

// == Composant
const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-site">
        <h1 className="title">iCook</h1>
        <Switch>
          <Route exact path="/">
            <Home data={data} />
          </Route>
          <Route exact path="/recettes/crepes">
            <Recipe data={data} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
// == Export
export default App;
