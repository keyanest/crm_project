import React, { Component } from 'react';
import { Link, withRouter, RouterContext, Router } from 'react-router';

class EditContactForm extends Component {
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
    this.deleteContact = this.deleteContact.bind(this);
  }

  contextTypes: {
    history: React.PropTypes.func.isRequired
 };

 componentWillMount(){
   let id = this.props.params.id
   $.ajax({
     url: "api/contacts/" + id + "/edit",
   }).done(data => {
     this.setState({
       name: data.name,
       last_name: data.last_name,
       phone_number: data.phone_number,
       email: data.email,
       company: data.company,
       position: data.position,
       department: data.department,
       last_contact: data.last_contact
     })
   })
 }

  handleContactFromSubmit(event) {
   event.preventDefault();
   let id = this.props.params.id
   let updateContactData = {
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
     url: "api/contacts/" + id,
     type: 'PATCH',
     data: updateContactData,
   }).done(data => {
     if (data.fullerror) {
       this.setState({ errors: data.fullerror });
     } else {
       this.props.history.pushState(null, ("/contacts/" + id));
     }
   });
 }

 handleChange(event) {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  }

  deleteContact() {
    $.ajax({
      url: "/api/contacts/" + this.props.params.id,
      type: "DELETE"
    }).done(data => {
      this.props.history.pushState(null, ("/contacts/"));
    })
  }

  render() {
    return(
      <div>
      <h1>Edit Contact</h1>
      <h1>{this.state.fullerror}</h1>
        <div>
          <form onSubmit={this.handleContactFromSubmit}>
            <div>
              <input
              type="text"
              placeholder="first name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input
              type="text"
              placeholder="last name"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input
              type="text"
              placeholder="phone number"
              name="phone_number"
              value={this.state.phone_number}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input
              type="text"
              placeholder="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input
              type="text"
              placeholder="company"
              name="company"
              value={this.state.company}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input
              type="text"
              placeholder="position"
              name="position"
              value={this.state.position}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input
              type="text"
              placeholder="department"
              name="department"
              value={this.state.department}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input
              type="text"
              placeholder="last contact"
              name="last_contact"
              value={this.state.last_contact}
              onChange={this.handleChange}
              />
            </div>
              <div>
                <input type="submit" className="button" value="Update" />
              </div>
              <br/>
              <div>
                <Link to={'/contacts/' + this.props.params.id}>Cancel</Link>
              </div>
          </form>
        </div>
        <br/>
        <button type="submit" onClick={() => {this.deleteContact()}}>Delete</button>
      </div>
    );
  }
};

export default EditContactForm;
