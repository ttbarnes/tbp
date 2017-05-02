import React from 'react';
import Helmet from 'react-helmet';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import {
  MainContent
} from './styled';

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
        {React.Children.toArray(props.children)}
      </MainContent>

      <br />
      <br />

      <Footer location={props.location} />

    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object
};

export default App;
