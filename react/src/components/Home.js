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
      <div>
        <h1>Your Profile</h1>
        Name: {this.state.user.first_name} {this.state.user.last_name} <br />
        Email: {this.state.user.email}
      </div>
    )
  }
}

export default Home;
