import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router'
import routes from './components/routes';

$(function() {
  ReactDOM.render(
    <Router routes={routes} history={hashHistory} />,
    document.getElementById('app')
  );
});
