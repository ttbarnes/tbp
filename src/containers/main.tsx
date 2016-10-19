import * as React from 'react';
import { connect } from 'react-redux';
import * as Radium from 'radium';

import Header from '../components/header';

const temp = {
  title: 'Title',
  navLinks: {
    something: true,
    aThing: true,
    somethingElse: true,
    contact: true
  }
};

export class Main extends React.Component<any, any> {

  public render() {

    return ((
      <section>
        <Header title={temp.title} items={temp.navLinks}></Header>
        <main>{this.props.children}</main>
      </section>
    ));
  }
};

export default
connect(null, null)(Radium(Main));
