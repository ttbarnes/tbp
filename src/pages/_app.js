import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Metadata from '@/components/Head';
import '@/styles/globals.scss';
import { FRED, FRED_EASTER_EGG, REPO } from '../constants';

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
  const router = useRouter();

  const queryParams = router.query;

  if (isProdEnv) {
    console.info(easterEggMessage);
  }

  if (queryParams) {
    if (Object.keys(queryParams).includes(FRED)) {
      console.info(FRED_EASTER_EGG);
    }
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
