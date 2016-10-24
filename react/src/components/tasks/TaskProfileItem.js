import React, { Component } from 'react';
import { Link } from 'react-router';

class TaskProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: []
    }
  }

  componentWillMount(){
    let id = this.props.params.id
    $.ajax({
      url: "api/tasks/" + id,
    }).done(data => {
      this.setState({ task: data })
    })
  }

  render() {
    debugger
    return (
      <div>
        <div>
          <ul>
            <li>
              Task: {this.state.task.name}, &nbsp; Hello
              Assigned: {this.state.task.assign_date}, &nbsp;
              Due: {this.state.task.due_date}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default TaskProfileItem;
