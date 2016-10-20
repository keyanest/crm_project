import React, { Component } from 'react';
import { Link } from 'react-router';
import ContactProfileItem from './ContactProfileItem'

class ContactIndexItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactIndexItem;
