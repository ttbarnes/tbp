import { createSelector } from 'reselect';

const selectTimelapse = () => (state) => state.get('timelapse');

const selectTimelapseVideos = () => createSelector(
  selectTimelapse(),
  (timelapseState) => timelapseState.get('videos')
);

export {
  selectTimelapseVideos
};
