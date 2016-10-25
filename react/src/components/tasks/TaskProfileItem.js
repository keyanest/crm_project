import React, { Component } from 'react';
import { Link } from 'react-router';

class TaskProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      contact: []
    }
  }

  componentWillMount(){
    let id = this.props.params.id
    $.ajax({
      url: "api/tasks/" + id,
    }).done(data => {
      this.setState({ task: data.task, contact: data.contact })
    })
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            <li>
              Task: {this.state.task.name} &nbsp;
              Assigned: {this.state.task.assign_date} &nbsp;
              Due: {this.state.task.due_date} &nbsp;
              Contact: &nbsp;
              <Link to={`contacts/${this.state.contact.id}`}>
              {this.state.contact.name} {this.state.contact.last_name}
              </Link> &nbsp;
              Phone Number: {this.state.contact.phone_number}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default TaskProfileItem;
