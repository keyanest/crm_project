import React from 'react'
import { Route } from 'react-router'
import App from './components/App';
import Contacts from './components/Contacts';
import Logs from './components/Logs';
import Tasks from './components/Tasks';


module.exports = (
  <Route>
    <Route path="/projects" component={Projects}/>
    <Route path="/projects/new" component={NewProjectForm}/>
    <Route path="/projects/:projectId" component={Songs}/>
    <Route path="/projects/:projectId/edit" component={EditProjectForm}/>
    <Route path="/projects/:projectId/songs/new" component={NewSongForm}/>
    <Route path="/projects/:projectId/songs/:songId" component={Song}/>
    <Route path="/projects/:projectId/songs/:songId/edit" component={EditSongForm}/>
  </Route>
)
