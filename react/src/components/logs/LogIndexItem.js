import React, { Component } from 'react';
import { Link } from 'react-router';

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
                Log: {this.props.name} Date: {this.props.log_date} Notes: {this.props.notes}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default LogIndexItem;
