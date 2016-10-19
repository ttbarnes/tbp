import * as React from 'react';
import { connect } from 'react-redux';
import * as Radium from 'radium';

export class Main extends React.Component<any, any> {

  public render() {

    return (
      <div>
        dev :-)
      </div>
    );
  }
};

export default
connect(null, null)(Radium(Main));
