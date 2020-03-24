import data from 'src/data';

const initialState = {
  recipes: data,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
export default rootReducer;
