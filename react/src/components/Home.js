import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
          <Link to={"/contacts/new"}>New Contact</Link> <br/><br/>
          <Link to={"/tasks/new"}>New Task</Link>
      </div>
    )
  }
}

export default Home;
