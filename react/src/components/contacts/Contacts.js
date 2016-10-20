import React, { Component } from 'react';
import { Link } from 'react-router';
import ContactIndexItem from './ContactIndexItem';


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
    let contacts = this.state.contacts.map(contactIndexItem =>{
        return (
          <ContactIndexItem
            key={contactIndexItem.id}
            id={contactIndexItem.id}
            name={contactIndexItem.name}
            last_name={contactIndexItem.last_name}
            phone_number={contactIndexItem.phone_number}
            email={contactIndexItem.email}
            company={contactIndexItem.company}
            position={contactIndexItem.position}
            department={contactIndexItem.department}
            last_contact={contactIndexItem.last_contact}
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
