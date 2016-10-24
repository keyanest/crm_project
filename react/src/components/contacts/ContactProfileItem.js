import React, { Component } from 'react';
import { Link } from 'react-router';
import Logs from '../logs/Logs'

class ContactProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      logs: []
    }
  }

  componentWillMount(){
    debugger
    let id = this.props.params.id
    $.ajax({
      url: "api/contacts/" + id,
    }).done(data => {
      this.setState({ contact: data.contact, logs: data.logs })
    })
  }

  render() {
    let logLink = `/contacts/${this.state.contact.id}/logs`
    let editLink = `/contacts/${this.state.contact.id}/edit`
    let newTaskLink = `/tasks/new`
    return (
      <div>
        <div>
          <ul>
            <li>
              Name: {this.state.contact.name} &nbsp;
              Last Name: {this.state.contact.last_name} &nbsp;
              Phone Number: {this.state.contact.phone_number} &nbsp;
              Email: {this.state.contact.email} &nbsp;
              Company: {this.state.contact.company} &nbsp;
              Position: {this.state.contact.position} &nbsp;
              Department: {this.state.contact.department} &nbsp;
              Last Contact: {this.state.contact.last_contact} &nbsp;
              <Link to={logLink}>Logs</Link> &nbsp;
              <Link to={editLink}>Edit Contact</Link> &nbsp;
              <Link to={newTaskLink}>New Task</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ContactProfileItem;
