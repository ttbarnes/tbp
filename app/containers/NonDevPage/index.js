import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectActivities } from './selectors';

export class NonDevPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    let {
      activities
    } = this.props;

    activities = activities.toJS();

    return (
      <article>

        <Helmet
          title="Non-Dev"
          meta={[
            { name: 'description', content: 'Non-dev' },
          ]}
        />

        <h1>Non-dev</h1>
        <p>fpv, timelapse, music here</p>
        <ul>
          {activities.map(() => (
            {/* <li key={index}>title: {activity.title && activity.title}</li> */}
          ))}
        </ul>
      </article>
    );
  }
}

NonDevPage.propTypes = {
  activities: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  activities: selectActivities()
});

export default connect(mapStateToProps, {})(NonDevPage);
