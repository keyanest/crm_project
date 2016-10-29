import React, { Component } from 'react';
import { Link, Router } from 'react-router';
import NavLink from './NavLink';
import Home from './Home';
import { Navbar, Nav, Dropdown, MenuItem, Breadcrumb, NavItem } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
  }
  contextTypes: {
  history: React.PropTypes.object.isRequired,
};
  render () {
    let burger = <i class="fa fa-bars" aria-hidden="true"></i>
    return (
      <div className="back_color">
        <div className="container-fluid" id="content">
          <Nav>
            <Dropdown>
              <Dropdown.Toggle>
              </Dropdown.Toggle>
              <Dropdown.Menu id={1} title={burger} id="basic-nav-dropdown">
                <MenuItem id={2} href="#" onClick={() => {this.props.history.pushState(null, '/')}}>Home</MenuItem>
                <MenuItem id={3} href="#" onClick={() => {this.props.history.pushState(null, 'contacts')}}>My Contacts</MenuItem>
                <MenuItem id={4} href="#" onClick={() => {this.props.history.pushState(null, 'tasks')}}>My Tasks</MenuItem>
                <MenuItem id={5} href="#" onClick={() => {this.props.history.pushState(null, 'tasks/complete')}}>Completed Tasks</MenuItem>
                <MenuItem id={6} href="#" onClick={() => {this.props.history.pushState(null, 'tasks/new')}}>New Task</MenuItem>
                <MenuItem id={7} href="#" onClick={() => {this.props.history.pushState(null, 'contacts/new')}}>New Contact</MenuItem>
                <MenuItem id={8} href="#" onClick={() => {this.props.history.pushState(null, 'stats')}}>Your Stats</MenuItem>
                <MenuItem id={9} href="#" onClick={() => {this.props.history.pushState(null, 'signoff')}}>Sign Off</MenuItem>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <br />
          <div>
            {this.props.children || <Home/>}
          </div>
        </div>
        <br />
        <div >
          <Nav className="footer fixed-bottom">
            <Breadcrumb>
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
          </Nav>
        </div>
      </div>
    )
  }
}

export default App;
