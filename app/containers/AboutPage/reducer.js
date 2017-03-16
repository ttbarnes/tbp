import about from '../../data/about.json';

const initialState = about[0];

function aboutReducers(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default aboutReducers;
