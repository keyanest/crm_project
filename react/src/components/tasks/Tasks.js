import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.linkFormatter = this.linkFormatter.bind(this);
  }
  componentWillMount() {
    $.ajax({
      url: "api/tasks",
    }).done(data => {
      this.setState({ tasks: data.tasks })
    })
  }

  linkFormatter(cell, row){
    return <Link to={`/tasks/` + cell}>View</Link>;
  }

  render () {
    return (
      <div className="container">
        <Grid>
          <Row>
            <div className="text-center">
              <h3>Tasks</h3>
            </div>
          </Row>
          <div className="table">
            <BootstrapTable data={this.state.tasks} striped={true} hover={true}>
              <TableHeaderColumn dataField="id" isKey={true} dataFormat={this.linkFormatter} dataSort={true}>Task Page</TableHeaderColumn>
              <TableHeaderColumn dataField="name" dataSort={true}>Task</TableHeaderColumn>
              <TableHeaderColumn dataField="assign_date" dataSort={true}>Assigned</TableHeaderColumn>
              <TableHeaderColumn dataField="due_date" dataSort={true}>Due</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </Grid>
      </div>
    );
  }
};

export default Tasks;
