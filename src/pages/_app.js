import PropTypes from 'prop-types';
import '@/styles/globals.scss';

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
};

export default App;
