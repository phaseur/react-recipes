// == Import npm
import React from 'react';
// == Import
import Header from 'src/components/Header';
import Ingredients from 'src/components/Ingredients';
import Steps from 'src/components/Steps';
import Home from 'src/components/Home';
import data from 'src/data';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <div className="main-site">
      <h1 className="title">oRecipes</h1>
      <Home />
      {/* <Ingredients />
      <Steps /> */}
    </div>
  </div>
);

// == Export
export default App;
