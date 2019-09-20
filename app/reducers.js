import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import clientsReducers from 'containers/ClientsPage/reducer';
import servicesReducer from 'reducers/services';
import techReducers from 'containers/TechnologiesPage/reducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  clients: clientsReducers,
  services: servicesReducer,
  tech: techReducers
});

export default createRootReducer;
