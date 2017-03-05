import React from 'react';

export class NonDevPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <h1>Non-dev</h1>
        <p>fpv, timelapse, music here</p>
      </article>
    );
  }
}

export default (NonDevPage);
