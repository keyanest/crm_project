import React, { Component } from 'react';
import { Link } from 'react-router';
import ContactItem from './ContactItem'

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
    this.loadContactsFromServer = this.loadContactsFromServer.bind(this);
  }

  loadContactsFromServer() {
    $.ajax({
      url: "api/contacts.json",
      dataType: "application/json"
    }).done(data => {
      debugger;
      this.setState({ contacts: data })
    })
  }

  componentWillMount() {
    this.loadContactsFromServer();
  }


  render () {
    let contacts;
    if (this.state.contacts.length > 0){
      contacts = this.state.contacts.map(contact =>{
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            last_name={contact.last_name}
          />
        );
      });
    } else {
      contacts = 1;
    }
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
