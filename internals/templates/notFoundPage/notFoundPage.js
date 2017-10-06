import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <p>Oh no, something has gone wrong :(</p>
        <Link to="/">Start again</Link>
      </article>
    );
  }
}
