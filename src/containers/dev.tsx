import * as React from 'react';
import { connect } from 'react-redux';
import * as Radium from 'radium';

import DevProjects from './devProjects';
import ProjectFilters from '../components/projectFilters';

export class Main extends React.Component<any, any> {

  public render() {

    return (
      <div>

        <ProjectFilters/>

        <br/>

        <DevProjects />

      </div>
    );
  }
};

export default
connect(null, null)(Radium(Main));
