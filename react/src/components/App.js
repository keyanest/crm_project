import React, { Component } from 'react';
import { Link, Router } from 'react-router';
import NavLink from './NavLink';
import Home from './Home';
import { Navbar, Nav, NavDropdown, MenuItem, Breadcrumb, NavItem } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
  }
  contextTypes: {
  history: React.PropTypes.object.isRequired,
};
  render () {
    return (
      <div className="container">
        <div className="whole">
          <Navbar>
                <NavDropdown eventKey={1} title="Menu" id="basic-nav-dropdown">
                  <MenuItem eventKey={1.1} href="#" onClick={() => {this.props.history.pushState(null, '/')}}>Home</MenuItem>
                  <MenuItem eventKey={1.2} href="#" onClick={() => {this.props.history.pushState(null, 'contacts')}}>My Contacts</MenuItem>
                  <MenuItem eventKey={1.3} href="#" onClick={() => {this.props.history.pushState(null, 'tasks')}}>My Tasks</MenuItem>
                  <MenuItem eventKey={1.3} href="#" onClick={() => {this.props.history.pushState(null, 'tasks/complete')}}>Completed Tasks</MenuItem>
                  <MenuItem eventKey={1.4} href="#" onClick={() => {this.props.history.pushState(null, 'tasks/new')}}>New Task</MenuItem>
                  <MenuItem eventKey={1.5} href="#" onClick={() => {this.props.history.pushState(null, 'contacts/new')}}>New Contact</MenuItem>
                  <MenuItem eventKey={1.6} href="#" onClick={() => {this.props.history.pushState(null, 'stats')}}>Your Stats</MenuItem>
                  <MenuItem eventKey={1.5} href="#" onClick={() => {this.props.history.pushState(null, 'about')}}>Contact Us</MenuItem>
                </NavDropdown>
              <div className="pull-right">
                <NavItem eventKey={2} href="#" onClick={() => this.props.history.goBack()}>Back</NavItem>
                <NavItem eventKey={3} href="#" onClick={() => this.props.history.goForward()}>Forward</NavItem>
              </div>
          </Navbar>
          <br />
          <div>
            {this.props.children || <Home/>}
          </div>
          <Breadcrumb className="footer">
            <Breadcrumb.Item href="#" onClick={() => {this.props.history.pushState(null, '/')}}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="https://www.facebook.com/">
              Facebook
            </Breadcrumb.Item>
            <Breadcrumb.Item href="https://twitter.com/">
              Twitter
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    )
  }
}

export default App;
