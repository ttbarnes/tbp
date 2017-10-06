import React from 'react';
// import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { useScroll } from 'react-router-scroll';
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
        <Switch>

          <Route
            exact
            path="/"
            component={HomePage}
          />
          <Route
            path="/about"
            component={AboutPage}
            render={() => useScroll()}
          />
          <Route
            exact
            path="/projects"
            component={ProjectsPage}
            render={() => useScroll()}
          />
          <Route
            path="/projects/:id"
            component={DevProjectPage}
            render={() => useScroll()}
          />
          <Route
            path="/hobbies"
            component={HobbiesPage}
            render={() => useScroll()}
          />
          <Route
            path="/contact"
            component={ContactPage}
            render={() => useScroll()}
          />
          <Route
            path=""
            component={NotFoundPage}
            render={() => useScroll()}
          />

        </Switch>

      </MainContent>

      <br />
      <br />

      <Footer location={props.location} />

    </div>
  );
}

App.propTypes = {
  location: React.PropTypes.object
};

App.defaultProps = {
  location: { pathname: '/temp' } // NOTE: temp. see below
};

// NOTE: BROKEN
// awaiting updates.
// see https://github.com/ReactTraining/react-router/issues/5072

// const mapStateToProps = (state) => ({
//   location: state.route.location,
// });

// export default connect(mapStateToProps)(App);

export default App;
