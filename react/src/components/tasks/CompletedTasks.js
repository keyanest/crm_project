import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import TaskIndexItem from './TaskIndexItem';


class CompletedTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed_tasks: []
    }
  }

  componentWillMount() {
    $.ajax({
      url: 'api/tasks',
    }).done(data => {
      this.setState({ completed_tasks: data.completed_tasks })
    })
  }

  render() {
    let tasks = this.state.completed_tasks.map(taskIndexItem => {
      return(
        <TaskIndexItem
          key={taskIndexItem.id}
          id={taskIndexItem.id}
          name={taskIndexItem.name}
          body={taskIndexItem.body}
          assign_date={taskIndexItem.assign_date}
          due_date={taskIndexItem.due_date}
        />
      )
    })
    return(
      <div>
        <div>
          <h1>Completed Tasks</h1>
        </div>
        <div>
        <Link to={"/tasks/new"}>New Task</Link> &nbsp;
        <Link to={"/tasks/"}>Back To Tasks</Link>
        </div>
        <div>
          {tasks}
        </div>
      </div>
    )
  }
}

export default CompletedTasks;
