import React, { Component } from 'react';
import { Link } from 'react-router';
import Logs from '../logs/Logs'
import { Grid, Row, Col } from 'react-bootstrap';


class ContactProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      logs: [],
      tasks: []
    }
  }

  componentWillMount(){
    let id = this.props.params.id
    $.ajax({
      url: "api/contacts/" + id,
    }).done(data => {
      this.setState({ contact: data.contact, logs: data.logs, tasks: data.tasks })
    })
  }

  render() {
    return (
      <Grid>
        <Row>
          <div className="text-center">
              Contact: {this.state.contact.name} {this.state.contact.last_name} <br />
              Phone Number: {this.state.contact.phone_number} <br />
              Email: {this.state.contact.email} <br />
              Company: {this.state.contact.company} <br />
              Position: {this.state.contact.position} <br />
              Department: {this.state.contact.department} <br />
              Last Contact: {this.state.contact.last_contact} <br />
              <Link to={`/contacts/${this.state.contact.id}/logs`}>Logs</Link> &nbsp;
              <Link to={`/contacts/${this.state.contact.id}/edit`}>Edit Contact</Link> &nbsp;
          </div>
        </Row>
      </Grid>
    )
  }
}

export default ContactProfileItem;
