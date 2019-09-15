import clients from '../../data/clients-v2.json';
import clientsSummary from '../../data/clients-summary.json';

const initialState = {
  data: clients,
  summary: clientsSummary
};

function clientsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default clientsReducer;
