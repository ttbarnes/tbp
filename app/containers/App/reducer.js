import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  error: false
});

function appReducer(state = initialState) {
  return state;
}

export default appReducer;
