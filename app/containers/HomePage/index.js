import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <article>
        <Helmet
          title="Front end developer, techy, musician"
          meta={[
            { name: 'description', content: 'JavaScript developer, musician, cyclist, FPV pilot, tea drinker.' },
          ]}
        />

        <h1>Tony Barnes</h1>
        <p>JavaScript developer, musician, cyclist, FPV pilot, tea drinker.</p>

        <br />

        <p>Read <Link to="about">about me</Link>, <br />check out <Link to="projects">my projects</Link>, <br />or see <Link to="hobbies">what else I get up to.</Link></p>

        <br />

      </article>
    );
  }
}

export default HomePage;
