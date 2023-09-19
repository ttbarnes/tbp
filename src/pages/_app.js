import PropTypes from 'prop-types';
import Metadata from '@/components/Head';
import '@/styles/globals.scss';
import { REPO } from '../constants';

const isProdEnv = process.env.NODE_ENV === 'production';

const easterEggMessages = {
  hello: `Hello 👋`,
  seeTheCode: 'Would you like to see the code?',
  repoLink: `Here is the repo: ${REPO}`,
  bonusPoints: 'Bonus points: Run a Lighthouse or Axe report 😉'
};

const { hello, seeTheCode, repoLink, bonusPoints } = easterEggMessages;

const easterEggMessage = `${hello} ${seeTheCode} \n${repoLink} \n${bonusPoints}`;

const App = ({ Component, pageProps }) => {
  if (isProdEnv) {
    console.info(easterEggMessage);
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
