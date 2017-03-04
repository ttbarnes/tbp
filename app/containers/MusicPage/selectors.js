import { createSelector } from 'reselect';

const selectMusic = () => (state) => state.get('music');

const selectMusicTracks = () => createSelector(
  selectMusic(),
  (musicState) => musicState.get('tracks')
);

export {
  selectMusicTracks
};
