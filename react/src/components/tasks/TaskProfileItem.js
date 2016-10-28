import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


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
      <div className="container">
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Task: {this.state.task.name}</li>
            <li className="list-group-item">Notes: {this.state.task.body}</li>
            <li className="list-group-item">Assigned: {this.state.task.assign_date}</li>
            <li className="list-group-item">Due: {this.state.task.due_date}</li>
            <li className="list-group-item">Contact: &nbsp;
            <Link to={`contacts/${this.state.contact.id}`}>
            {this.state.contact.name} {this.state.contact.last_name}
            </Link></li>
            <li className="list-group-item">Phone Number: {this.state.contact.phone_number}</li>
            <Button className="buttons" onClick={() => {this.props.history.pushState(null, `tasks/${this.props.params.id}/edit`)}}>Completed</Button>
            <Button className="buttons" onClick={() => {this.deleteTask()}}>Delete</Button>
          </ul>
        </div>
      </div>
    )
  }
}

export default TaskProfileItem;
