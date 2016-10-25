import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App';
import Home from './Home'
import Contacts from './contacts/Contacts';
import ContactProfileItem from './contacts/ContactProfileItem';
import Logs from './logs/Logs';
import Tasks from './tasks/Tasks';
import TaskProfileItem from './tasks/TaskProfileItem'
import NewContactForm from './forms/NewContactForm';
import EditContactForm from './forms/EditContactForm';
import NewLogForm from './forms/NewLogForm';
import NewTaskForm from './forms/NewTaskForm';
import EditTaskForm from './forms/EditTaskForm';
import CompletedTasks from './tasks/CompletedTasks';
import AppContact from './AppContact'
import About from './About'




module.exports = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={AppContact}/>
      <Route path="/contacts" component={Contacts}/>
      <Route path="/contacts/new" component={NewContactForm}/>
      <Route path="/contacts/:id/edit" component={EditContactForm}/>
      <Route path="/contacts/:id" component={ContactProfileItem}/>
      <Route path="/contacts/:id/logs" component={Logs}/>
      <Route path="/contacts/:id/logs/new" component={NewLogForm}/>
      <Route path="/tasks" component={Tasks}/>
      <Route path="/tasks/new" component={NewTaskForm}/>
      <Route path="/tasks/complete" component={CompletedTasks}/>
      <Route path="/tasks/:id" component={TaskProfileItem}/>
      <Route path="/tasks/:id/edit" component={EditTaskForm}/>
    </Route>
  </Route>
)
