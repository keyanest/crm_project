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
      url: `api/contacts/${this.props.params.id}`,
    }).done(data => {
      this.setState({ logs: data.logs })
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
            contactId={this.props.params.id}
            history={this.props.history}
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
          <Link to={`/contacts/${this.props.params.id}/logs/new`}>New Log</Link> &nbsp;
          <Link to={`contacts/${this.props.params.id}`}>Back to Contact</Link>
        </div>
      </div>
    );
  }
};

export default Logs;
