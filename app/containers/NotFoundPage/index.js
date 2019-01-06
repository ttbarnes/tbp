import React from 'react';
import { Link } from 'react-router-dom';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import PageContainer from '../PageContainer';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <PageContainer>
        <H1 hide>Oh no</H1>
        <H2 h1Size>Oh no, something has gone wrong :(</H2>
        <Link to="/">Start again</Link>
      </PageContainer>
    );
  }
}
