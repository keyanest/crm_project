import React, { Component } from 'react';
import { Link } from 'react-router';

class ContactProfileItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let contactId = this.props.params.id
    return (
      <div>
        <h2>{contactId}</h2>
        <div>
          <ul>
            <li>
              Name: {this.props.name}
              Last Name: {this.props.last_name}
              Phone Number: {this.props.phone_number}
              Email: {this.props.email}
              Company: {this.props.company}
              Position: {this.props.position}
              Department: {this.props.department}
              Last Contact: {this.props.last_contact}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ContactProfileItem;
