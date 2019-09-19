import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import HomePage from 'containers/HomePage/loadable';
import AboutPage from 'containers/AboutPage/loadable';
import ClientsPage from 'containers/ClientsPage/loadable';
import TechnologiesPage from 'containers/TechnologiesPage/loadable';
import ContactPage from 'containers/ContactPage/loadable';
import NotFoundPage from 'containers/NotFoundPage/loadable';
import GlobalStyle from '../../global-styles';

function App(props) {
  const { location, history } = props;

  return (
    <ConnectedRouter history={history}>
      <GlobalStyle />
      <ScrollToTop>
        <div>
          <Helmet
            titleTemplate="%s - Tony Barnes"
            defaultTitle="Tony Barnes"
            meta={[
              { name: 'description', content: 'Freelance developer, London' }
            ]}
          />

          <Nav location={location} />

          <Switch>

            <Route
              exact
              path="/"
              component={HomePage}
            />

            <Route
              path="/about"
              component={AboutPage}
            />

            <Route
              exact
              path="/clients"
              component={ClientsPage}
            />

            <Route
              exact
              path="/technologies"
              component={TechnologiesPage}
            />

            <Route
              path="/contact"
              component={ContactPage}
            />

            <Route
              path=""
              component={NotFoundPage}
            />

          </Switch>

          <Footer location={location} />

        </div>
      </ScrollToTop>

    </ConnectedRouter>
  );
}

App.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object.isRequired
};

App.defaultProps = {
  location: { pathname: '/' }
};

export default App;
