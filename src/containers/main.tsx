import * as React from 'react';
import { connect } from 'react-redux';
import * as Radium from 'radium';
import Header from '../components/header';

const temp = {
  title: 'Title',
  navLinks: {
    dev: {
      title: 'Dev',
      route: '/dev'
    },
    music: {
      title: 'Music',
      route: '/music'
    },
    fpv: {
      title: 'fpv',
      route: '/fpv'
    },
    timelapse: {
      title: 'Timelapse',
      route: '/timelapse'
    }
  }
};

export class Main extends React.Component<any, any> {

  public render() {

    return ((
      <section>
        <Header title={temp.title} items={temp.navLinks}></Header>
        <hr/>
        <main>{this.props.children}</main>
        <hr/>

      </section>
    ));
  }
};

export default
connect(null, null)(Radium(Main));
