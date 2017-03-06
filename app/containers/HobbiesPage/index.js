import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LazyLoad from 'react-lazyload';
import Tag from 'components/Tag';
import MusicPlayer from 'components/MusicPlayer';
import VideoPlayer from 'components/VideoPlayer';
import { selectActivities } from './selectors';
import {
  ListItem
} from './styled';

export class HobbiesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      activities: this.props.activities.toJS(),
    };
  }

  renderActivity(a) {
    if (a.type === 'fpv' ||
        a.type === 'timelapse') {
      return (
        <ListItem key={a.videoId}>
          <Tag type={a.type} />
          <VideoPlayer video={a} />
        </ListItem>
      );
    } else if (a.type === 'music') {
      return (
        <ListItem key={a.url}>
          <Tag type={a.type} />
          <MusicPlayer url={a.url} />
        </ListItem>
      );
    }
    return null;
  }

  render() {
    const { activities } = this.state;
    return (
      <article>

        <Helmet
          title="Hobbies"
          meta={[
            { name: 'description', content: 'Tony Barnes hobbies - music, FPV, timelapse' },
          ]}
        />

        <h1>Hobbies</h1>

        {activities ? (
          activities.map((activity, index) => (
            <LazyLoad once={activity.once} height={200} key={index}>
              {this.renderActivity(activity)}
            </LazyLoad>
          ))
        ) : (
          <p>Unable to load activities :(</p>
        )}
      </article>
    );
  }
}

HobbiesPage.propTypes = {
  activities: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  activities: selectActivities()
});

export default connect(mapStateToProps, {})(HobbiesPage);
