import React from 'react';
import { Link } from 'react-router-dom';
import { useScroll } from 'react-router-scroll';
import H1 from '../../components/H1';
import H2 from '../../components/H2';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    useScroll();
  }

  render() {
    return (
      <div>
        <H1 hide>Oh no</H1>
        <H2 h1Size>Oh no, something has gone wrong :(</H2>
        <Link to="/">Start again</Link>
      </div>
    );
  }
}
