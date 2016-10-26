import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { Button, FormGroup } from 'react-bootstrap';

class NewContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      last_name: '',
      phone_number: '',
      email: '',
      company: '',
      position: '',
      department: '',
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
   let newContactData = {
     contact: {
       name: this.state.name,
       last_name: this.state.last_name,
       phone_number: this.state.phone_number,
       email: this.state.email,
       company: this.state.company,
       position: this.state.position,
       department: this.state.department,
       last_contact: this.state.last_contact
     }}
   $.ajax({
     url: "api/contacts",
     type: 'POST',
     data: newContactData,
   }).done(data => {
     if (data.fullerror) {
       this.setState({ errors: data.fullerror });
     } else {
       this.props.history.pushState(null, '/contacts');
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
      <h1>New Contact</h1>
      <h1>{this.state.errors}</h1>
        <div>
          <form onSubmit={this.handleContactFromSubmit}>
            <div className="form-control input-lg">
              <input
              type="text"
              placeholder="First Name"
              name="name"
              value={this.name}
              onChange={this.handleChange}
              />
            </div>
            <div className="form-control input-lg">
              <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={this.last_name}
              onChange={this.handleChange}
              />
            </div>
            <div className="form-control input-lg">
              <input
              type="text"
              placeholder="Phone Number"
              name="phone_number"
              value={this.phone_number}
              onChange={this.handleChange}
              />
            </div>
            <div className="form-control input-lg">
              <input
              type="text"
              placeholder="Email"
              name="email"
              value={this.email}
              onChange={this.handleChange}
              />
            </div>
            <div className="form-control input-lg">
              <input
              type="text"
              placeholder="Company"
              name="company"
              value={this.company}
              onChange={this.handleChange}
              />
            </div>
            <div className="form-control input-lg">
              <input
              type="text"
              placeholder="Position"
              name="position"
              value={this.position}
              onChange={this.handleChange}
              />
            </div>
            <div className="form-control input-lg">
              <input
              type="text"
              placeholder="Department"
              name="department"
              value={this.department}
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

export default NewContactForm;
