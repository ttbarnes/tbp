import { fromJS } from 'immutable';
import about from '../../data/about.json';

const initialState = fromJS(
  about[0]
);

function aboutReducers(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default aboutReducers;
