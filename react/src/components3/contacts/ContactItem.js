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
              <li>
                Contact: &nbsp;
                <Link to={'/contacts/' + this.props.id}>
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

export default ContactItem;
