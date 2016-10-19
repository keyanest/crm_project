import React, { Component } from 'react';
import { Link } from 'react-router';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: data
      last_name: "",
      phone_number: "",
      email: "",
      company: "",
      position: "",
      department: "",
      last_contact: ""

    };
  }

  loadContactFromServer() {
    let id = this.props.routeParams.contactId

  },

  componentWillMount(
    $.ajax({
      url: 'api/contacts',
    }).done(data =>
      this.setState({
        name: data.name,
        last_name: data.last_name
        phone_number: data.phone_number
        email: data.email
        company: data.company
        position: data.position
        department: data.department
        last_contact: data.last_contact
      })
    )
  )

  render() {
    return(
      <div>
        Hello
      </div>
    )
  }
}

export default Contact;
