import React, { Component } from 'react';
import { Link } from 'react-router';

class ContactProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: []
    }
  }
  // 
  // componentWillMount(){
  //   let id = this.props.params.id
  //   $.ajax({
  //     url: "api/contacts/" + id,
  //   }).done(data => {
  //     this.setState({ contact: data })
  //   })
  // }

  render() {
    let contactId = this.props.params.id
    return (
      <div>
        <h2>{contactId}</h2>
        <div>
          <ul>
            <li>
              Name: {this.state.name}
              Last Name: {this.state.last_name}
              Phone Number: {this.state.phone_number}
              Email: {this.state.email}
              Company: {this.state.company}
              Position: {this.state.position}
              Department: {this.state.department}
              Last Contact: {this.state.last_contact}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ContactProfileItem;
