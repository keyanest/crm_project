import React, { Component } from 'react';
import { Link } from 'react-router';
import LogProfileItem from './LogProfileItem'


class LogIndexItem extends Component {
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
                <Link to={'/logs/logId'}>
                  {this.props.name} {this.props.last_name}
                </Link>
                &nbsp; Company: {this.props.company}
              </li>
            </ul>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default LogIndexItem;
