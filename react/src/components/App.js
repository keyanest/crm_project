import React, { Component } from 'react';
import { Link } from 'react-router';



class App extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Link to="contacts"><button>contacts</button></Link>
        <Link to="logs"><button>logs</button></Link>
        <Link to="tasks"><button>tasks</button></Link>

        {this.props.children}
      </div>
    )
  }
}

export default App;
