import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App';
import Contacts from './components/Contacts';
import Logs from './components/Logs';
import Tasks from './components/Tasks';

$(function() {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="contacts(/:contact)" name="contacts" component={Contacts}></Route>
        <Route path="logs(/:log)" name="logs" component={Logs}></Route>
        <Route path="tasks(/:task)" name="tasks" component={Tasks}></Route>
      </Route>
    </Router>,
    document.getElementById('app')
  );
});
