import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
    this.linkFormatter = this.linkFormatter.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "api/contacts",
    }).done(data => {
      this.setState({ contacts: data })
    })
  }

  linkFormatter(cell, row){
    return <Link to={`/contacts/` + cell}>View</Link>;
  }

  render () {
    let error = this.state.fullerror
    return (
      <Grid>
        <Row>
          <div className="text-center">
            <h3>Contacts</h3>
          </div>
        </Row>
        <div>
          <BootstrapTable data={this.state.contacts} striped={true} hover={true}>
            <TableHeaderColumn dataField="id" isKey={true} dataFormat={this.linkFormatter} dataSort={true}>Profile Page</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort={true}>First Name</TableHeaderColumn>
            <TableHeaderColumn dataField="last_name" dataSort={true}>Last Name</TableHeaderColumn>
            <TableHeaderColumn dataField="company" dataSort={true}>Company</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </Grid>
    );
  }
};

export default Contacts;
