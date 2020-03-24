import { createStore } from 'redux';
import rootReducer from 'src/reducers/rootReducer';

export default createStore(rootReducer);
/*
import { combineReducers } from 'redux'

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
*/
