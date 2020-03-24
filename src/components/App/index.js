// == Import npm
import React from 'react';
// == Import
import Header from 'src/components/Header';
import Ingredients from 'src/components/Ingredients';
import Steps from 'src/components/Steps';
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
        {/* <Home data={data} /> */}
        <Recipe data={data} />
      </div>
    </div>
  );
};
// == Export
export default App;
