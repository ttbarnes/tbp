import PropTypes from 'prop-types';
import Metadata from '@/components/Head';
import '@/styles/globals.scss';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Metadata />
      <Component {...pageProps} />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
};

export default App;
