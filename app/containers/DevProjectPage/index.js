import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectProject
} from './selectors';

export class DevProjectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    if (!this.props.project) {
      return null;
    }

    const project = this.props.project.toJS();

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
            <p>{project.date}</p>
            <p>Category: {project.category}</p>
            <p>ID: {project.id}</p>

            <ul>
              {project.tech.map((item) =>
                <li key={item.tag} className={`tech-tag ${item.tag}`}>{item.tag}</li>
              )}
            </ul>

            <ul>
              {project.deliverItems.map((item) =>
                <li key={item}>{item}</li>
              )}
            </ul>

            <ul>
              {project.urls.map((item) =>
                <li key={item}>
                  <a href={item}>
                    {item.includes('github') ? (
                      'Check out the code'
                    ) : (
                      'View the live site'
                    )}
                  </a>
                </li>
              )}
            </ul>

          </section>

        ) : (
          <section>
            <p>oh no, apparently this project does not exist :(</p>
          </section>
        )}

      </article>
    );
  }
}

DevProjectPage.propTypes = {
  project: React.PropTypes.any
};

const mapStateToProps = (state, { params }) => createStructuredSelector({
  project: selectProject(params.id),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(DevProjectPage);
