import React from 'react';
import ContactForm from './ContactForm';
import { Link } from 'react-router';


class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      company: '',
      position: '',
      department: '',
      lastContact: ''
    };
    this.handleContactFromSubmit = this.handleContactFromSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
    this.handleLastContactChange = this.handleLastContactChange.bind(this);
  }

  handleContactFromSubmit(event) {
    event.preventDefault();
    let newContactData = JSON.stringify( { name: this.state.name, last_name: this.state.lastName, phone_number: this.state.phoneNumber, email: this.state.email, company: this.state.company, position: this.state.position, department: this.state.department, last_contact: this.state.lastcontact } );
    $.ajax({
      url: "api/contacts",
      dataType: 'json',
      type: 'POST',
      data: newContactData
    })
  }

  handleNameChange(event) {
    let newName = event.target.value;
    this.setState({ name: newName });
  }

  handleLastNameChange(event) {
    let newLastName = event.target.value;
    this.setState({ lastName: newLastName });
  }

  handlePhoneNumberChange(event) {
    let newPhoneNumber = event.target.value;
    this.setState({ phoneNumber: newPhoneNumber });
  }

  handleEmailChange(event) {
    let newEmail = event.target.value;
    this.setState({ email: newEmail });
  }

  handleCompanyChange(event) {
    let newCompany = event.target.value;
    this.setState({ company: newCompany });
  }

  handlePositionChange(event) {
    let newPosition = event.target.value;
    this.setState({ position: newPosition });
  }

  handleDepartmentChange(event) {
    let newDepartment = event.target.value;
    this.setState({ department: newDepartment });
  }

  handleLastContactChange(event) {
    let newLastContact = event.target.value;
    this.setState({ lastContact: newLastContact });
  }


  render () {
    return (
      <div>
        <h1>Contacts</h1>
        <ContactForm
          handleContactFromSubmit={this.handleContactFromSubmit}
          handleNameChange ={this.handleNameChange}
          handleLastNameChange ={this.handleLastNameChange}
          handlePhoneNumberChange ={this.handlePhoneNumberChange}
          handleEmailChange ={this.handleEmailChange}
          handleCompanyChange ={this.handleCompanyChange}
          handlePositionChange ={this.handlePositionChange}
          handleDepartmentChange ={this.handleDepartmentChange}
          handleLastContactChange ={this.handleLastContactChange}
        />
        <Link to="logs"><button>logs</button></Link>
        <Link to="tasks"><button>tasks</button></Link>
      </div>
    );
  }
}

export default Contacts;
