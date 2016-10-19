import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App';
import Home from './Home'
import Contacts from './contacts/Contacts';
import ContactProfileItem from './logs/ContactProfileItem';
import Logs from './logs/Logs';
import LogProfileItem from './logs/LogProfileItem';

module.exports = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/contacts" component={Contacts}/>
      <Route path="/contacts/:contactId" component={ContactProfileItem}/>
      <Route path="/logs" component={Logs}/>
      <Route path="/logs/:logId" component={LogProfileItem}/>
    </Route>
  </Route>
)
