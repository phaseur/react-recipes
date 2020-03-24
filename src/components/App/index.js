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
import slugify from 'slugify';
import './app.scss';

// == Composant
const App = () => {
  const items = data.map((item) => (item));
  return (
    <div className="app">
      <Header items={items} />
      <div className="main-site">
        <h1 className="title">iCook</h1>
        <Switch>
          <Route exact path="/">
            <Home data={items} />
          </Route>
          {data.map((item) => (
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
// == Export
export default App;
