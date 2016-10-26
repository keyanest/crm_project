import React, { Component } from 'react';
import { Link } from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Grid, Row } from 'react-bootstrap';

class Logs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
      contacts: []
    };
  }

  componentWillMount() {
    $.ajax({
      url: `api/contacts/${this.props.params.id}`,
    }).done(data => {
      this.setState({ logs: data.logs, contact: data.contact })
    })
  }

  render () {
    return (
      <Grid>
        <Row>
          <div className="text-center">
            <h3>Logs</h3>
          </div>
        </Row>
        <div>
          <BootstrapTable data={this.state.logs} striped={true} hover={true}>
            <TableHeaderColumn dataField="name" isKey={true} dataSort={true}>Log</TableHeaderColumn>
            <TableHeaderColumn dataField="notes" dataSort={true}>Notes</TableHeaderColumn>
            <TableHeaderColumn dataField="log_date" dataSort={true}>Date</TableHeaderColumn>
          </BootstrapTable>
        </div>
        <Link to={`/contacts/${this.props.params.id}/logs/new`}>New Log</Link> &nbsp;
      </Grid>
    );
  }
};

export default Logs;
