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
    let logs = this.state.logs.map(logIndexItem =>{
        return (
          <LogIndexItem
            key={logIndexItem.id}
            id={logIndexItem.id}
            name={logIndexItem.name}
            log_date={logIndexItem.log_date}
            notes={logIndexItem.notes}
          />
        );
      });
    return (
      <div>
        <div>
          <h1>Logs</h1>
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
