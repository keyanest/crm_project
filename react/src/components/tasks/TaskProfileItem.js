import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import testdata from '../testdata';
import { LineChart, BarChart, Bar, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class TaskProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      contact: []
    }
  }

  componentWillMount(){
    let id = this.props.params.id
    $.ajax({
      url: "api/tasks/" + id,
    }).done(data => {
      this.setState({ task: data.task, contact: data.contact })
    })
  }

  deleteTask() {
    $.ajax({
      url: "/api/tasks/" + this.props.params.id,
      type: "DELETE"
    }).done(data => {
      this.props.history.pushState(null, ("/tasks"));
    })
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Task: {this.state.task.name}</li>
            <li className="list-group-item">Notes: {this.state.task.body}</li>
            <li className="list-group-item">Assigned: {this.state.task.assign_date}</li>
            <li className="list-group-item">Due: {this.state.task.due_date}</li>
            <li className="list-group-item">Contact: &nbsp;
            <Link to={`contacts/${this.state.contact.id}`}>
            {this.state.contact.name} {this.state.contact.last_name}
            </Link></li>
            <li className="list-group-item">Phone Number: {this.state.contact.phone_number}</li>
            <Button className="buttons" onClick={() => {this.props.history.pushState(null, `tasks/${this.props.params.id}/edit`)}}>Completed</Button>
            <Button className="buttons" onClick={() => {this.deleteTask()}}>Delete</Button>
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

export default TaskProfileItem;
