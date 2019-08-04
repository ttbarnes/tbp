import servicesData from '../data/services.json';

const initialState = servicesData;

function servicesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default servicesReducer;
