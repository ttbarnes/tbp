import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import Nav from 'components/Nav';
import Footer from 'components/Footer';
import HomePage from 'containers/HomePage/loadable';
import AboutPage from 'containers/AboutPage/loadable';
import ProjectsPage from 'containers/ProjectsPage/loadable';
import DevProjectPage from 'containers/DevProjectPage/loadable';
import HobbiesPage from 'containers/HobbiesPage/loadable';
import ContactPage from 'containers/ContactPage/loadable';
import NotFoundPage from 'containers/NotFoundPage/loadable';

import { MainContent } from './styled';


// NOTE: location is not done as best as possible due to an
// issue in latest version of react-router/react-router-redux
// this is a workound whilst awaiting updates
// for now, just have to wrap each component that needs `location` prop with react-redux connect
// see https://github.com/ReactTraining/react-router/issues/5072
const mapStateToProps = (state) => ({
  location: state.route.location,
});

const ConnectedSwitch = connect(
  mapStateToProps
)(Switch);

function App(props) {
  return (
    <div>
      <Helmet
        titleTemplate="%s - Tony Barnes"
        defaultTitle="Tony Barnes"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' }
        ]}
      />

      <Nav location={props.location} />

      <MainContent location={props.location}>
        <ConnectedSwitch>

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
            path="/projects"
            component={ProjectsPage}
          />
          <Route
            path="/projects/:id"
            component={DevProjectPage}
          />
          <Route
            path="/hobbies"
            component={HobbiesPage}
          />
          <Route
            path="/contact"
            component={ContactPage}
          />
          <Route
            path=""
            component={NotFoundPage}
          />

        </ConnectedSwitch>

      </MainContent>

      <Footer location={props.location} />

    </div>
  );
}

App.propTypes = {
  location: React.PropTypes.object
};

App.defaultProps = {
  location: { pathname: '/' } // NOTE: temp. see below
};

export default App;
