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
              <Dropdown.Menu eventKey={1} title={burger} id="basic-nav-dropdown">
                <MenuItem eventKey={1.1} href="#" onClick={() => {this.props.history.pushState(null, '/')}}>Home</MenuItem>
                <MenuItem eventKey={1.2} href="#" onClick={() => {this.props.history.pushState(null, 'contacts')}}>My Contacts</MenuItem>
                <MenuItem eventKey={1.3} href="#" onClick={() => {this.props.history.pushState(null, 'tasks')}}>My Tasks</MenuItem>
                <MenuItem eventKey={1.3} href="#" onClick={() => {this.props.history.pushState(null, 'tasks/complete')}}>Completed Tasks</MenuItem>
                <MenuItem eventKey={1.4} href="#" onClick={() => {this.props.history.pushState(null, 'tasks/new')}}>New Task</MenuItem>
                <MenuItem eventKey={1.5} href="#" onClick={() => {this.props.history.pushState(null, 'contacts/new')}}>New Contact</MenuItem>
                <MenuItem eventKey={1.6} href="#" onClick={() => {this.props.history.pushState(null, 'stats')}}>Your Stats</MenuItem>
                <MenuItem eventKey={1.5} href="#" onClick={() => {this.props.history.pushState(null, 'about')}}>Contact Us</MenuItem>
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
