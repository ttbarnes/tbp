import tech from '../../data/tech.json';

const initialState = tech;

function techReducers(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default techReducers;
