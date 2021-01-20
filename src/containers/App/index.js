import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchRecipes } from 'src/actions/iCook';

const mapStateToProps = (state) => ({
  datas: state.recipes.listRecipes,
});
const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => {
    dispatch(fetchRecipes());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
)(App);
