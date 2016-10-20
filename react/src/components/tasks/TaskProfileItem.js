import React, { Component } from 'react';
import { Link } from 'react-router';

class TaskProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: []
    }
  }
  //
  // componentWillMount(){
  //   let id = this.props.params.id
  //   $.ajax({
  //     url: "api/contacts/" + id,
  //   }).done(data => {
  //     this.setState({ contact: data })
  //   })
  // }

  render() {
    let taskId = this.props.params.id
    return (
      <div>
        <h2>{taskId}</h2>
        <div>
          <ul>
            <li>
              Task: {this.state.name},&nbsp; {this.state.last_name}
              Assigned: {this.state.phone_number}
              Due: {this.state.email}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default TaskProfileItem;
