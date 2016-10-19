import React, { Component } from 'react';
import { Link } from 'react-router';



class Home extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Link to="contacts"><button>contacts</button></Link>

      </div>
    )
  }
}

export default Home;
