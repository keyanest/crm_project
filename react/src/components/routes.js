import React from 'react'
import { Route } from 'react-router'
import Home from './Home';
import Contacts from './contacts/Contacts';
import ContactProfileItem from './contacts/ContactProfileItem';

module.exports = (
  <Route>
    <Route path="/" component={Home}>
      <Route path="/contacts" component={Contacts}/>
      <Route path="/contacts/:contactId" component={ContactProfileItem}/>


    </Route>
  </Route>
)
