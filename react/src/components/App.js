import React, { Component } from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';
import Home from './Home'



class App extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <ul>
          <li><NavLink to="contacts">contacts</NavLink></li>
        </ul>
        {this.props.children || <Home/>}
      </div>
    )
  }
}

export default App;
