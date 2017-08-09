import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const Assert = require('assert');
const ReactTestUtils = require('react-addons-test-utils');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


