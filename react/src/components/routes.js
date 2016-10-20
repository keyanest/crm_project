import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App';
import Home from './Home'
import Contacts from './contacts/Contacts';
import ContactProfileItem from './contacts/ContactProfileItem';
import Logs from './logs/Logs';
import Tasks from './tasks/Tasks';
import TaskProfileItem from './tasks/TaskProfileItem'



module.exports = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/contacts" component={Contacts}/>
      <Route path="/contacts/:id" component={ContactProfileItem}/>
      <Route path="/contacts/:id/logs" component={Logs}/>
      <Route path="/tasks" component={Tasks}/>
      <Route path="/tasks/taskId" component={TaskProfileItem}/>
    </Route>
  </Route>
)
