import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App';
import Home from './Home'
import Contacts from './contacts/Contacts';
import ContactProfileItem from './contacts/ContactProfileItem';
import NewContactForm from './forms/NewContactForm';
import EditContactForm from './forms/EditContactForm';
import Logs from './logs/Logs';
import NewLogForm from './forms/NewLogForm';
import LogProfileItem from './logs/LogProfileItem';
import Tasks from './tasks/Tasks';
import TaskProfileItem from './tasks/TaskProfileItem';
import NewTaskForm from './forms/NewTaskForm';
import EditTaskForm from './forms/EditTaskForm';
import CompletedTasks from './tasks/CompletedTasks';
import ChartMain from './charts/ChartMain';
import MonthCallChart from './charts/MonthCallChart';
import WeekCallChart from './charts/WeekCallChart';
import MonthOppChart from './charts/MonthOppChart';
import WeekOppChart from './charts/WeekOppChart';
import StatsForm from './forms/StatsForm';

module.exports = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/contacts" component={Contacts}/>
      <Route path="/contacts/new" component={NewContactForm}/>
      <Route path="/contacts/:id/edit" component={EditContactForm}/>
      <Route path="/contacts/:id" component={ContactProfileItem}/>
      <Route path="/contacts/:id/logs" component={Logs}/>
      <Route path="/contacts/:id/logs/new" component={NewLogForm}/>
      <Route path="/contacts/:id/logs/:id" component={LogProfileItem}/>
      <Route path="/tasks" component={Tasks}/>
      <Route path="/tasks/new" component={NewTaskForm}/>
      <Route path="/tasks/complete" component={CompletedTasks}/>
      <Route path="/tasks/:id" component={TaskProfileItem}/>
      <Route path="/tasks/:id/edit" component={EditTaskForm}/>
      <Route path="/stats" component={ChartMain}>
        <Route path="/stats/weekcalls" component={WeekCallChart}/>
        <Route path="/stats/monthcalls" component={MonthCallChart}/>
        <Route path="/stats/weekopps" component={WeekOppChart}/>
        <Route path="/stats/monthopps" component={MonthOppChart}/>
        <Route path="/stats/new" component={StatsForm}/>
      </Route>
    </Route>
  </Route>
)
