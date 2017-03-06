import { fromJS } from 'immutable';
import activities from '../../data/hobbies.json';

const initialState = fromJS({
  activities
});

function nonDevReducers(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default nonDevReducers;
