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
    return (
      <div className="container">
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Log: {this.state.log.name}</li>
            <li className="list-group-item">Date: {this.state.log.log_date}</li>
            <li className="list-group-item">Notes: {this.state.log.notes}</li>
            <li className="list-group-item">Contact: &nbsp;
            <Link to={`contacts/${this.state.contact.id}`}>
            {this.state.contact.name} {this.state.contact.last_name}
            </Link></li>
            <li className="list-group-item">Phone Number: {this.state.contact.phone_number}</li>
            <button type="submit" onClick={() => {this.deleteLog()}}>Delete</button>
          </ul>
        </div>
      </div>
    )
  }
}

export default LogProfileItem;
