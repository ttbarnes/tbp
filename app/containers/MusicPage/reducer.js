import { fromJS } from 'immutable';
import musicTracks from '../../data/music.json';

const initialState = fromJS({
  tracks: musicTracks
});

function musicReducers(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default musicReducers;
