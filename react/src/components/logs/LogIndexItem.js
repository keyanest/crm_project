import React, { Component } from 'react';
import { Link, withRouter, RouterContext, Router } from 'react-router';

class LogIndexItem extends Component {
  constructor(props) {
    super(props);
    this.deleteLog  = this.deleteLog.bind(this);
  }

  contextTypes: {
    history: React.PropTypes.func.isRequired
 };

  deleteLog() {
    $.ajax({
      url: "/api/contacts/" + this.props.contactId + "/logs/" + this.props.id,
      type: "DELETE"
    }).done(data => {
      this.props.history.pushState(null, ("/contacts/" + this.props.contactId ));
    })
  }


  render() {
    return (
      <div>
        <div>
          <div>
            <ul>
              <li>
                Log: {this.props.name} Date: {this.props.log_date} Notes: {this.props.notes} &nbsp;
                <button type="submit" onClick={() => {this.deleteLog()}}>Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default LogIndexItem;
