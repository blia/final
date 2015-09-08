import 'babel-core/polyfill';
import React from 'react';
import App from '../app/app';

const rootElement = document.getElementById('app');

React.render(
  <App/>,
  rootElement
);
