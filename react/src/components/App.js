import React, { Component } from 'react';
import { Link, Router } from 'react-router';
import NavLink from './NavLink';
import Home from './Home';
import { Navbar, NavItem, Nav, Panel } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
  }

  contextTypes: {
  history: React.PropTypes.object.isRequired,
};

  render () {
    return (
      <div>
        <div xs={12} md={8}>
          <Navbar.Header>
            <Nav bsStyle="pills" activeKey={1}>
              <NavItem key={1} href="#" onClick={() => {this.props.history.pushState(null, '/')}}>Home</NavItem>
              <NavItem key={2} href="#" onClick={() => {this.props.history.pushState(null, 'contacts')}}>My Contacts</NavItem>
              <NavItem key={3} href="#" onClick={() => {this.props.history.pushState(null, 'tasks')}}>My Tasks</NavItem>
              <NavItem key={4} href="#" onClick={() => {this.props.history.pushState(null, 'tasks/complete')}}>Completed Tasks</NavItem>
              <NavItem key={5} href="#" onClick={() => {this.props.history.pushState(null, 'tasks/new')}}>New Task</NavItem>
              <NavItem key={6} href="#" onClick={() => {this.props.history.pushState(null, 'contacts/new')}}>New Contact</NavItem>
              <NavItem key={7} href="#" onClick={() => {this.props.history.pushState(null, 'about')}}>About Us</NavItem>
              <NavItem key={8} href="#" onClick={() => {this.props.history.pushState(null, 'contact')}}>Contact Us</NavItem>
            </Nav>
          </Navbar.Header>
        </div>
        <div>
          <p>{this.props.children || <Home/>}</p>
        </div>
      </div>
    )
  }
}

export default App;
