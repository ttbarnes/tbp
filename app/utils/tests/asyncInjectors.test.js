/**
 * Test async injectors
 */

import expect from 'expect';
import { memoryHistory } from 'react-router';
import configureStore from '../../store';

import {
  injectAsyncReducer,
  getAsyncInjectors,
} from '../asyncInjectors';

// Fixtures

const initialState = { reduced: 'soon' };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return state.set('reduced', action.payload);
    default:
      return state;
  }
};

describe('asyncInjectors', () => {
  let store;

  describe('getAsyncInjectors', () => {
    before(() => {
      store = configureStore({}, memoryHistory);
    });

    it('given a store, should return all async injectors', () => {
      const { injectReducer } = getAsyncInjectors(store);

      injectReducer('test', reducer);
      const state = store.getState();

      const actual = state.test;
      const expected = initialState.merge({ reduced: 'yup' });

      expect(actual).toEqual(expected);
    });

    it('should throw if passed invalid store shape', () => {
      let result = false;

      Reflect.deleteProperty(store, 'dispatch');

      try {
        getAsyncInjectors(store);
      } catch (err) {
        result = err.name === 'Invariant Violation';
      }

      expect(result).toEqual(true);
    });
  });

  describe('helpers', () => {
    before(() => {
      store = configureStore({}, memoryHistory);
    });

    describe('injectAsyncReducer', () => {
      it('given a store, it should provide a function to inject a reducer', () => {
        const injectReducer = injectAsyncReducer(store);

        injectReducer('test', reducer);
        const state = store.getState();
        const actual = state.test;
        const expected = initialState;

        expect(actual).toEqual(expected);
      });

      it('should throw if passed invalid name', () => {
        let result = false;

        const injectReducer = injectAsyncReducer(store);

        try {
          injectReducer('', reducer);
        } catch (err) {
          result = err.name === 'Invariant Violation';
        }

        try {
          injectReducer(999, reducer);
        } catch (err) {
          result = err.name === 'Invariant Violation';
        }

        expect(result).toEqual(true);
      });

      it('should throw if passed invalid reducer', () => {
        let result = false;

        const injectReducer = injectAsyncReducer(store);

        try {
          injectReducer('bad', 'nope');
        } catch (err) {
          result = err.name === 'Invariant Violation';
        }

        try {
          injectReducer('coolio', 12345);
        } catch (err) {
          result = err.name === 'Invariant Violation';
        }

        expect(result).toEqual(true);
      });
    });
  });
});
