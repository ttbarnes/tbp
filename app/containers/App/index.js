import React from 'react';
import Helmet from 'react-helmet';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import {
  AppWrapper,
  MainContent
} from './styled';

function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Tony Barnes"
        defaultTitle="Tony Barnes"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />

      <Nav location={props.location} />

      <MainContent>
        {React.Children.toArray(props.children)}
      </MainContent>

      <Footer location={props.location} />

    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object
};

export default App;
