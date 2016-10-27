import React, { Component } from 'react';
import { Link } from 'react-router';
import Logs from '../logs/Logs'
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import testdata from '../testdata';
import { LineChart, BarChart, Bar, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class ContactProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      logs: [],
      tasks: []
    }
  }

  contextTypes: {
    history: React.PropTypes.func.isRequired
 };

  componentWillMount(){
    let id = this.props.params.id
    $.ajax({
      url: "api/contacts/" + id,
    }).done(data => {
      this.setState({ contact: data.contact, logs: data.logs, tasks: data.tasks })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <ul className="list-group list-group-flush">
              <li className="list-group-item">Contact: {this.state.contact.name} {this.state.contact.last_name}</li>
              <li className="list-group-item">Phone Number: {this.state.contact.phone_number}</li>
              <li className="list-group-item">Email: {this.state.contact.email}</li>
              <li className="list-group-item">Company: {this.state.contact.company}</li>
              <li className="list-group-item">Position: {this.state.contact.position}</li>
              <li className="list-group-item">Department: {this.state.contact.department}</li>
            <Button className="buttons" type="submit" onClick={() => {this.props.history.pushState(null, `/contacts/${this.state.contact.id}/logs`)}}>Logs</Button>
            <Button className="buttons" type="submit" onClick={() => {this.props.history.pushState(null, `/contacts/${this.state.contact.id}/edit`)}}>Edit</Button>
          </ul>
        </div>
        <div className="charts">
          <div className="row">
            <div className="col-md-6">
              <AreaChart width={550} height={400} data={testdata}
                    margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
                <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
                <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
              </AreaChart>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 right-align">
              <AreaChart width={550} height={400} data={testdata}
                    margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
                <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
                <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
              </AreaChart>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactProfileItem;
