/*
 * DevPage
 *
 * Everything development related
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectProject } from './selectors';

export class DevProjectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    const project = this.props.project.toJS();

    return (
      <article>

        <Helmet
          title="Dev Project"
          meta={[
            { name: 'description', content: 'Dev things' },
          ]}
        />

        <p>{project.title}</p>
        <p>Category: {project.category}</p>
        <p>ID: {project.id}</p>




      </article>
    );
  }
}

DevProjectPage.propTypes = {
  project: React.PropTypes.any,
};

export function mapDispatchToProps(dispatch) {
  return {

  };
}

const mapStateToProps = createStructuredSelector({
  project: selectProject(),
});

// Wrap the component to inject dispatch and state into it
// export default connect(mapStateToProps, mapDispatchToProps)(DevProjectPage);
export default connect(mapStateToProps, mapDispatchToProps)(DevProjectPage);
