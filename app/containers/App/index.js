/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';

const AppWrapper = styled.div`
  max-width: calc(600px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - tbp"
        defaultTitle="tbp"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />

      <Header location={props.location} />
      {React.Children.toArray(props.children)}

    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object
};

export default App;
