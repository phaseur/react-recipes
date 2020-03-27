import { connect } from 'react-redux';
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  datas: state.recipes.listRecipes,
});

export default connect(
  mapStateToProps,
  null,
)(Home);
