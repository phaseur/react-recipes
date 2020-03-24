import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  datas: state.recipes,
});

export default connect(
  mapStateToProps,
  null,
)(App);
