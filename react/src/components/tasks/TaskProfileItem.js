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

  deleteTask() {
    $.ajax({
      url: "/api/tasks/" + this.props.params.id,
      type: "DELETE"
    }).done(data => {
      this.props.history.pushState(null, ("/tasks"));
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
              Phone Number: {this.state.contact.phone_number} &nbsp;
            </li>
          </ul>
          <Link to={`tasks/${this.props.params.id}/edit`}>Mark Task As Completed</Link> &nbsp;
          <button type="submit" onClick={() => {this.deleteTask()}}>Delete</button>
        </div>
      </div>
    )
  }
}

export default TaskProfileItem;
