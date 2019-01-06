import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LazyLoad from 'react-lazyload';
import H1 from 'components/H1';
import Tag from 'components/Tag';
import PageContainer from '../PageContainer';
import H2 from '../../components/H2';
import A from '../../components/A';
import { selectActivities } from './selectors';
import { ListItem } from './styled';

export class HobbiesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      activities: this.props.activities
    };
  }

  renderActivity(a) {
    if (a.type === 'fpv' ||
        a.type === 'timelapse') {
      return (
        <ListItem key={a.videoId}>
          <Tag
            type={a.type}
            backgroundTheme
          />
          <H2>{a.title}</H2>
          <p>{a.description}</p>
          <A href={`https://www.youtube.com/watch?v=${a.videoId}`} target="_blank" rel="noopener">{`https://www.youtube.com/watch?v=${a.videoId}`}</A>
        </ListItem>
      );
    } else if (a.type === 'music') {
      return (
        <ListItem key={a.url}>
          <Tag
            type={a.type}
            backgroundTheme
          />
          <H2>{a.title}</H2>
          <p>{a.description}</p>
          <A href={a.url} target="_blank" rel="noopener">{a.url}</A>
        </ListItem>
      );
    }
    return null;
  }

  render() {
    const { activities } = this.state;
    return (
      <PageContainer>

        <Helmet
          title="Hobbies"
          meta={[
            { name: 'description', content: 'Tony Barnes hobbies - music, FPV, timelapse' },
          ]}
        />

        <H1 hide>Hobbies</H1>

        {activities ? (
          activities.map((activity, index) => (
            <LazyLoad once={activity.once} height={200} key={index}>
              {this.renderActivity(activity)}
            </LazyLoad>
          ))
        ) : (
          <p>Unable to load activities :(</p>
        )}
      </PageContainer>
    );
  }
}

HobbiesPage.propTypes = {
  activities: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  activities: selectActivities()
});

export default connect(mapStateToProps, {})(HobbiesPage);
