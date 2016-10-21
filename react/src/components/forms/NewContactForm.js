import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

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
      last_contact: '',
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
     if (data.errors) {
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
      <div>
      <h1>New Contact</h1>
      <h1>{this.state.fullerror}</h1>
        <div>
          <form onSubmit={this.handleContactFromSubmit}>
            <div>
              <input
              type="text"
              placeholder="first name"
              name="name"
              value={this.name}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input
              type="text"
              placeholder="last name"
              name="last_name"
              value={this.last_name}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input
              type="text"
              placeholder="phone number"
              name="phone_number"
              value={this.phone_number}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input
              type="text"
              placeholder="email"
              name="email"
              value={this.email}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input
              type="text"
              placeholder="company"
              name="company"
              value={this.company}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input
              type="text"
              placeholder="position"
              name="position"
              value={this.position}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input
              type="text"
              placeholder="department"
              name="department"
              value={this.department}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input
              type="text"
              placeholder="last contact"
              name="last_contact"
              value={this.last_contact}
              onChange={this.handleChange}
              />
            </div>
              <div>
                <input type="submit" className="button" value="Add" />
              </div>
          </form>
        </div>
      </div>
    );
  }
};

export default NewContactForm;
