import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

class LogProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
    }
  }

  componentWillMount(){
    $.ajax({
      url: `api/contacts/3/logs/${this.props.params.id[1]}`,
    }).done(data => {
      debugger
      this.setState({ log: data.log })
    })
  }

  deleteLog() {
    $.ajax({
      url: `api/logs/${this.props.params.id[1]}`,
      type: "DELETE"
    }).done(data => {
      this.props.history.goBack();
    })
  }

  render() {
    debugger
    return (
      <Grid>
        <Row className="profile">
          <Col xs={6} md={4}>
            Log: {this.state.log.name} <br />
            Date: {this.state.log.log_date} <br />
            Notes: {this.state.log.notes} <br />
            Contact: &nbsp;
            <Link to={`contacts/${this.state.contact.id}`}>
            {this.state.contact.name} {this.state.contact.last_name}
            </Link> <br />
            Phone Number: {this.state.contact.phone_number} <br />
            <button type="submit" onClick={() => {this.deleteLog()}}>Delete</button>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default LogProfileItem;
