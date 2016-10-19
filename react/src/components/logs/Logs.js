import React, { Component } from 'react';
import { Link } from 'react-router';
import LogIndexItem from './LogIndexItem'


class Logs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    };
  }
  componentWillMount() {
    $.ajax({
      url: "api/logs",
    }).done(data => {
      this.setState({ logs: data })
    })
  }
  render () {
    let logs = this.state.contacts.map(logIndexItem =>{
        return (
          <LogIndexItem
            key={logIndexItem.id}
            id={logIndexItem.id}
            name={logIndexItem.name}
            last_name={logIndexItem.last_name}
            phone_number={logIndexItem.phone_number}
            email={logIndexItem.email}
            company={logIndexItem.company}
            position={logIndexItem.position}
            department={logIndexItem.department}
            last_contact={logIndexItem.last_contact}
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
          {logs}
        </div>
      </div>
    );
  }
};

export default Logs;
