import React, { Component } from 'react';
import { Link } from 'react-router';
import TaskProfileItem from './TaskProfileItem';
import { Grid, Row, Col } from 'react-bootstrap';

class TaskIndexItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let taskId = `/tasks/${this.props.id}`
    return (
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            <ul>
              <li>
                Task: &nbsp;
                <Link to={taskId}>
                {this.props.name}
                </Link>
                , {this.props.body} Assigned: {this.props.assign_date} Due: {this.props.due_date}
              </li>
            </ul>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default TaskIndexItem;
