import React, { Component } from 'react';
import { Link } from 'react-router';
import Logs from '../logs/Logs'
import { Grid, Row, Col } from 'react-bootstrap';


class ContactProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      logs: [],
      tasks: []
    }
  }

  componentWillMount(){
    let id = this.props.params.id
    $.ajax({
      url: "api/contacts/" + id,
    }).done(data => {
      this.setState({ contact: data.contact, logs: data.logs, tasks: data.tasks })
    })
  }

  render() {
    let logLink = `/contacts/${this.state.contact.id}/logs`
    let editLink = `/contacts/${this.state.contact.id}/edit`
    let newTaskLink = `/tasks/new`
    return (
      <Grid>
        <Row>
          <Col xs={6} md={4}>
                Name: {this.state.contact.name} <br />
                Last Name: {this.state.contact.last_name} <br />
                Phone Number: {this.state.contact.phone_number} <br />
                Email: {this.state.contact.email} <br />
                Company: {this.state.contact.company} <br />
                Position: {this.state.contact.position} <br />
                Department: {this.state.contact.department} <br />
                Last Contact: {this.state.contact.last_contact} <br />
                <Link to={logLink}>Logs</Link> &nbsp;
                <Link to={editLink}>Edit Contact</Link> &nbsp;
                <Link to={newTaskLink}>New Task</Link>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ContactProfileItem;
