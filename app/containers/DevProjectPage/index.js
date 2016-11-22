/*
 * DevPage
 *
 * Everything development related
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
  selectProject,
  selectSelectedProject 
} from './selectors';

export class DevProjectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    let project;

    this.props.project ? project = this.props.project.toJS() : null;

    return (
      <article>

        <Helmet
          title="Dev Project"
          meta={[
            { name: 'description', content: 'Dev things' },
          ]}
        />

        {project ? (
          <section>
            <p>{project.title}</p>
            <p>Category: {project.category}</p>
            <p>ID: {project.id}</p>
          </section>

        ): (
          <section>
            <p>oh no, apparently this project doesn't exist :(</p>
          </section>
        )}

      </article>
    );
  }
}

DevProjectPage.propTypes = {
  project: React.PropTypes.any,
};

const mapStateToProps = (state, {params}) => createStructuredSelector({
  project: selectProject(params.id),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(DevProjectPage);
