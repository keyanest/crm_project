import React, { Component } from 'react';
import { Link } from 'react-router';

class ContactItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <div>
          <ul>
            <Link to={'/contacts/' + this.props.id}></Link>
              <li>Name: {this.props.name}, {this.props.last_name}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactItem;
