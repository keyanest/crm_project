import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_tasks: []
    }
    this.linkFormatter = this.linkFormatter.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: 'api/tasks',
    }).done(data => {
      this.setState({ user_tasks: data.user_tasks })
    })
  }

  linkFormatter(cell, row){
    return <Link to={`/tasks/` + cell}>View</Link>;
  }

  render() {
    return (
      <div className="container">
        <Grid>
          <Row>
            <div className="text-center">
              <h3>Tasks For Today</h3>
            </div>
          </Row>
          <div className="table">
            <BootstrapTable data={this.state.user_tasks} hover={true} condensed={true} pagination={true} ignoreSinglePage={true}>
              <TableHeaderColumn dataField="id" isKey={true} dataFormat={this.linkFormatter} dataSort={true}>Task Page</TableHeaderColumn>
              <TableHeaderColumn dataField="name" dataSort={true}>Task</TableHeaderColumn>
              <TableHeaderColumn dataField="assign_date" dataSort={true}>Assigned</TableHeaderColumn>
              <TableHeaderColumn dataField="due_date" dataSort={true}>Due</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </Grid>
      </div>
    )
  }
}

export default Home;
