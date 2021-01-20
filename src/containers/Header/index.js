import { connect } from 'react-redux';
import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  datas: state.recipes.listRecipes,
});

export default connect(
  mapStateToProps,
  null,
)(Header);
