import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MusicPlayer from 'components/MusicPlayer';
import { selectMusicTracks } from './selectors';

export class MusicPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    let { tracks } = this.props;
    if (tracks) {
      tracks = tracks.toJS();
    }
    return (
      <article>

        <Helmet
          title="Music"
          meta={[
            { name: 'description', content: 'TonyB, ttox, etc....' },
          ]}
        />

        {!tracks ? (
          <p>Unable to load tracks at the moment.</p>
        ) : (
          <ul className="no-list-style">
            {tracks.map((track) => (
              <li key={track.url}>
                <MusicPlayer url={track.url} />
              </li>
            ))}
          </ul>
        )}

      </article>
    );
  }
}

MusicPage.propTypes = {
  tracks: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  tracks: selectMusicTracks()
});

export default connect(mapStateToProps, {})(MusicPage);
