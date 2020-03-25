import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootMiddleware from 'src/middlewares/rootMiddleware';
import rootReducer from 'src/reducers/rootReducer';

const enhancers = composeWithDevTools(
  applyMiddleware(
    rootMiddleware,
    // .... d'autres middlewares
  ),
);

// const reducers = combineReducers({ rootReducer });
export default createStore(rootReducer, enhancers);
