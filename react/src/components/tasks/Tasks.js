import React, { Component } from 'react';
import { Link } from 'react-router';
import TaskIndexItem from './TaskIndexItem';
import NewTaskForm from '../forms/NewTaskForm';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }
  componentWillMount() {
    $.ajax({
      url: "api/tasks",
    }).done(data => {
      this.setState({ tasks: data })
    })
  }

  render () {
    let tasks = this.state.tasks.map(taskIndexItem => {
      if (taskIndexItem.completed === false) {
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
      }
    })
    return (
      <div>
        <div>
          <h1>Tasks</h1>
        </div>
        <div>
        <Link to={"/tasks/new"}>New Task</Link>
        </div>
        <div>
          {tasks}
        </div>
      </div>
    );
  }
};

export default Tasks;
