import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { Grid, Row } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class CompletedTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed_tasks: []
    };
    this.linkFormatter = this.linkFormatter.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: 'api/tasks',
    }).done(data => {
      this.setState({ completed_tasks: data.completed_tasks })
    })
  }

  linkFormatter(cell, row){
    return <Link to={`/contacts/` + cell}>View</Link>;
  }

  render() {
    return(
      <Grid>
        <Row>
          <div className="text-center">
            <h3>Completed Tasks</h3>
          </div>
        </Row>
        <div>
          <BootstrapTable data={this.state.completed_tasks} striped={true} hover={true}>
          <TableHeaderColumn dataField="contact_id" isKey={true} dataFormat={this.linkFormatter} dataSort={true}>Contact</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort={true}>Task</TableHeaderColumn>
          <TableHeaderColumn dataField="body" dataSort={true}>Notes</TableHeaderColumn>
          <TableHeaderColumn dataField="assign_date" dataSort={true}>Assigned</TableHeaderColumn>
          <TableHeaderColumn dataField="due_date" dataSort={true}>Completed</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </Grid>
    )
  }
}

export default CompletedTasks;
