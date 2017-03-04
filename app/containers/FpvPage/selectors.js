import { createSelector } from 'reselect';

const selectFpv = () => (state) => state.get('fpv');

const selectFpvVideos = () => createSelector(
  selectFpv(),
  (fpvState) => fpvState.get('videos')
);

export {
  selectFpvVideos
};
