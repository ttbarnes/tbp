import { fromJS } from 'immutable';
import fpvVideos from '../../data/fpv.json';

const initialState = fromJS({
  videos: fpvVideos
});

function fpvReducers(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default fpvReducers;
