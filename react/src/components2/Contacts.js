import React from 'react';
import ContactForm from './ContactForm';
import { Link } from 'react-router';

loadContactsFromServer() {
  $.ajax({
    url: "api/v1/contacts",
    dataType: 'application/json',
    type: 'GET',
  }).done(data => {
    this.setState({ contacts: data });
    }
}

componentDidMount(
  this.loadContactsFromServer();
)


class Contacts extends React.Component {
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
      last_contact: ''
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
    let newContactData = { contact: { name: this.state.name, last_name: this.state.last_name, phone_number: this.state.phone_number, email: this.state.email, company: this.state.company, position: this.state.position, department: this.state.department, last_contact: this.state.last_contact } }
    $.ajax({
      url: "api/contacts",
      dataType: 'application/json',
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
    this.setState({ last_name: newLastName });
  }

  handlePhoneNumberChange(event) {
    let newPhoneNumber = event.target.value;
    this.setState({ phone_number: newPhoneNumber });
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
    this.setState({ last_contact: newLastContact });
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
