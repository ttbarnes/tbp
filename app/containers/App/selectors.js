import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.global;

const selectLoading = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.loading
);

const selectError = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.error
);

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.route.location;

    if (routingState !== prevRoutingState) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState;
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  selectLoading,
  selectError,
  selectLocationState
};
