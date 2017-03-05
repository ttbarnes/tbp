import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import H1 from '../../components/H1';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <article>
        <Helmet
          meta={[
            { name: 'description', content: 'JavaScript developer, musician, cyclist, FPV pilot, tea drinker.' },
          ]}
        />

        <H1>Tony Barnes</H1>
        <p>JavaScript developer, musician, cyclist, FPV pilot, tea drinker.</p>

        <br />

        <p>Read <Link to="dev">about me</Link>, <br />check out <Link to="dev">my projects</Link>, <br />or see <Link to="non-dev">what else I get up to.</Link></p>

        <br />

      </article>
    );
  }
}

export default HomePage;
