import React, { Component } from 'react';
import { Link } from 'react-router';
import TaskIndexItem from './TaskIndexItem';

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
    return (
      <div>
        <div>
          <h1>Tasks</h1>
        </div>
        <div>
        </div>
        <div>
          {tasks}
        </div>
      </div>
    );
  }
};

export default Tasks;
