import clients from '../../data/clients-v2.json';

const initialState = {
  data: clients
};

function clientsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default clientsReducer;
