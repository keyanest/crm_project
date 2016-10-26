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
    debugger
    return (
      <Grid>
        <Row className="profile">
          <div>
            Task: {this.state.task.name} <br />
            Notes: {this.state.task.body} <br />
            Assigned: {this.state.task.assign_date} <br />
            Due: {this.state.task.due_date} <br />
            Contact: &nbsp;
            <Link to={`contacts/${this.state.contact.id}`}>
            {this.state.contact.name} {this.state.contact.last_name}
            </Link> <br />
            Phone Number: {this.state.contact.phone_number} <br />
            <Button className="buttons" type="submit" onClick={() => {this.props.history.pushState(null, `tasks/${this.props.params.id}/edit`)}}>Completed</Button>
            <Button className="buttons" type="submit" onClick={() => {this.deleteTask()}}>Delete</Button>
          </div>
        </Row>
      </Grid>
    )
  }
}

export default TaskProfileItem;
