import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import recipesMiddleware from 'src/middlewares/recipesMiddleware';
import rootReducer from 'src/reducers/rootReducer';

const enhancers = composeWithDevTools(
  applyMiddleware(
    recipesMiddleware,
    // .... d'autres middlewares
  ),
);
export default createStore(rootReducer, enhancers);
