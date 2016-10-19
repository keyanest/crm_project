import React, { Component } from 'react';
import { Link } from 'react-router';
import ContactItem from './ContactItem'

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }


  componentWillMount() {
    $.ajax({
      url: "api/contacts",
    }).done(data => {
      this.setState({ contacts: data })
    })
  }


  render () {
    let contacts = this.state.contacts.map(contact =>{
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            last_name={contact.last_name}
            company={contact.company}
          />
        );
      });

    return (
      <div>
        <div>
          <h1>Contacts</h1>
        </div>
        <div>
        </div>
        <div>
          {contacts}
        </div>
      </div>
    );
  }
};

export default Contacts;
