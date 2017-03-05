import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import H1 from 'components/H1';
import ListItem from '../../components/ListItem';
import MusicPlayer from 'components/MusicPlayer';
import VideoPlayer from '../../components/VideoPlayer';
import { selectActivities } from './selectors';

export class NonDevPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderActivity(a) {
    if (a.type === 'fpv' ||
        a.type === 'timelapse') {
      return (
        <ListItem key={a.videoId}>
          <VideoPlayer video={a} />
        </ListItem>
      );
    } else if (a.type === 'music') {
      return (
        <ListItem key={a.url}>
          <MusicPlayer url={a.url} />
        </ListItem>
      );
    }
    return null;
  }

  render() {
    let { activities } = this.props;

    if (activities) {
      activities = activities.toJS();
    }

    return (
      <article>

        <H1>Non-dev</H1>

        <Helmet
          title="Non-dev"
          meta={[
            { name: 'description', content: 'Non-dev' },
          ]}
        />

        {!activities ? (
          <p>Unable to load activities.</p>
        ) : (
          <ul>
            {activities.map((activity) => this.renderActivity(activity))}
          </ul>
        )}
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
