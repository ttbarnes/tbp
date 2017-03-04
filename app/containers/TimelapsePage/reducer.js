import { fromJS } from 'immutable';
import timelapseVideos from '../../data/timelapse.json';

const initialState = fromJS({
  videos: timelapseVideos
});

function timelapseReducers(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default timelapseReducers;
