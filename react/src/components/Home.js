import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    }
  }

  componentWillMount() {
    $.ajax({
      url: 'api/users',
    }).done(data => {
      this.setState({ user: data })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Home Page</h1>
          Name: {this.state.user.first_name} {this.state.user.last_name} <br />
          Email: {this.state.user.email}
        </div>
      </div>
    )
  }
}

export default Home;
