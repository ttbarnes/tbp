// tslint:disable-next-line
/// <reference path='typings/globals.d.ts'/>
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const { AppContainer } = require('react-hot-loader') as any;
const { Redbox } = require('redbox-react') as any;

import App from './App';

import './styles/common.css';

function entry() {
  const container = document.getElementById('content');

  ReactDOM.render((
    <AppContainer errorReporter={Redbox}>
      <App/>
    </AppContainer>
  ), container);
}

entry();

declare var module: {
  hot?: {
    accept: Function;
  }
};

if (module.hot) {
  module.hot.accept('./App', () => {
    // tslint:disable-next-line
    const NewApp = require('./App');
    entry();
  });
}
