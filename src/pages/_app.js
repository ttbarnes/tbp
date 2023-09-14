import PropTypes from 'prop-types';
import Metadata from '@/components/Head';
import '@/styles/globals.scss';
import { REPO } from '../constants';

const isProdEnv = process.env.NODE_ENV === 'production';

const App = ({ Component, pageProps }) => {
  if (isProdEnv) {
    console.info(
      `Hello 👋 Would you like to see the code? \nHere is the repo: ${REPO} \nBonus points: Run a Lighthouse report 😉`
    );
  }

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
