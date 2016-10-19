import React, { Component } from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';



class Home extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
      <ul>
        <li><NavLink to="contacts">contacts</NavLink></li>
      </ul>
      {this.props.children}
      </div>
    )
  }
}

export default Home;
