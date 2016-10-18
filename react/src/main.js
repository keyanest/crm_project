import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

$(function() {
  ReactDOM.render(
    <App text={"hi there"} />,
    document.getElementById('app')
  );
});
