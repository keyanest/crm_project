import React, { Component } from 'react';
import { Link } from 'react-router';
import Logs from '../logs/Logs'
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class ContactProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      logs: [],
      tasks: []
    }
  }

  contextTypes: {
    history: React.PropTypes.func.isRequired
 };

  componentWillMount() {
    $.ajax({
      url: `api/contacts/${this.props.params.id}`,
    }).done(data => {
      this.setState({ contact: data.contact, logs: data.logs, tasks: data.tasks })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <ul className="list-group list-group-flush">
              <li className="list-group-item">Contact: {this.state.contact.name} {this.state.contact.last_name}</li>
              <li className="list-group-item">Phone Number: {this.state.contact.phone_number}</li>
              <li className="list-group-item">Email: {this.state.contact.email}</li>
              <li className="list-group-item">Company: {this.state.contact.company}</li>
              <li className="list-group-item">Position: {this.state.contact.position}</li>
              <li className="list-group-item">Department: {this.state.contact.department}</li>
            <Button className="buttons" type="submit" onClick={() => {this.props.history.pushState(null, `/contacts/${this.state.contact.id}/logs`)}}>Logs</Button>
            <Button className="buttons" type="submit" onClick={() => {this.props.history.pushState(null, `/contacts/${this.state.contact.id}/edit`)}}>Edit</Button>
          </ul>
        </div>
      </div>
    )
  }
}

export default ContactProfileItem;
