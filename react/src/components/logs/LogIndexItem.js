import React, { Component } from 'react';
import { Link, withRouter, RouterContext, Router } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';


class LogIndexItem extends Component {
  constructor(props) {
    super(props);
    this.deleteLog  = this.deleteLog.bind(this);
  }

  contextTypes: {
    history: React.PropTypes.func.isRequired
 };

  deleteLog() {
    $.ajax({
      url: "/api/contacts/" + this.props.contactId + "/logs/" + this.props.id,
      type: "DELETE"
    }).done(data => {
      this.props.history.pushState(null, ("/contacts/" + this.props.contactId ));
    })
  }


  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            Log: {this.props.name} Date: {this.props.log_date} Notes: {this.props.notes} &nbsp;
            <button type="submit" onClick={() => {this.deleteLog()}}>Delete</button>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default LogIndexItem;

let logs = this.state.logs.map(logIndexItem =>{
    return (
      <LogIndexItem
        key={logIndexItem.id}
        id={logIndexItem.id}
        name={logIndexItem.name}
        log_date={logIndexItem.log_date}
        notes={logIndexItem.notes}
        contactId={this.props.params.id}
        history={this.props.history}
      />
    );
  });
