import React, { Component } from 'react';
import { Link } from 'react-router';
import TaskProfileItem from './TaskProfileItem'


class TaskIndexItem extends Component {
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
                Task: &nbsp;
                <Link to={'/tasks/taskId'}>
                {this.props.name}
                </Link>
                , {this.props.body} Assigned: {this.props.assign_date} Due: {this.props.due_date}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskIndexItem;
