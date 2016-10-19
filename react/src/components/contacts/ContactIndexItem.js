import React, { Component } from 'react';
import { Link } from 'react-router';
import ContactProfileItem from './ContactProfileItem'

class ContactIndexItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      <ContactProfileItem
        key={this.props.id}
        id={this.props.id}
        name={this.props.name}
        last_name={this.props.last_name}
        phone_number={this.props.phone_number}
        email={this.props.email}
        company={this.props.company}
        position={this.props.position}
        department={this.props.department}
        last_contact={this.props.last_contact}
      />
    return (
      <div>
        <div>
          <div>
            <ul>
              <li>
                Contact: &nbsp;
                <Link to={'/contacts/contactId'}>
                  {this.props.name} {this.props.last_name}
                </Link>
                &nbsp; Company: {this.props.company}
              </li>
            </ul>}
          </div>
        </div>
      </div>
    )
  }
}

export default ContactIndexItem;
