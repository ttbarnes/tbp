import * as React from 'react';
import { connect } from 'react-redux';
import * as Radium from 'radium';

export class Music extends React.Component<any, any> {

  public render() {

    return (
      <div>
        <h2>Music</h2>
      </div>
    );
  }
};

export default
connect(null, null)(Radium(Music));
