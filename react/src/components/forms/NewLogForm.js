import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { Button } from 'react-bootstrap';

class NewLogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      notes: '',
      errors: ''
    };
    this.handleContactFromSubmit = this.handleContactFromSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  contextTypes: {
    history: React.PropTypes.func.isRequired
 };

  handleContactFromSubmit(event) {
   event.preventDefault();
   let newLogData = {
     log: {
       name: this.state.name,
       notes: this.state.notes
     }}
   $.ajax({
     url: `api/contacts/${this.props.params.id}/logs`,
     type: 'POST',
     data: newLogData,
   }).done(data => {
     if (data.fullerror) {
       this.setState({ errors: data.fullerror });
     } else {
       this.props.history.pushState(null, `/contacts/${this.props.params.id}/logs`);
     }
   });
 }

 handleChange(event) {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  }

  render() {
    return(
      <div className="container">
        <h1>New Log</h1>
        <h1>{this.state.errors}</h1>
        <div>
          <form onSubmit={this.handleContactFromSubmit}>
            <div className="form-control input-lg">
              <input
              type="text"
              placeholder="Log Name"
              name="name"
              value={this.name}
              onChange={this.handleChange}
              />
            </div>
            <div className="form-control input-lg">
              <input
              type="text"
              placeholder="Notes"
              name="notes"
              value={this.notes}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <Button className="buttons" type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default NewLogForm;
