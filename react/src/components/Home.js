import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import testdata from './testdata';
import { LineChart, BarChart, Bar, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_tasks: []
    }
    this.linkFormatter = this.linkFormatter.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: 'api/tasks',
    }).done(data => {
      this.setState({ user_tasks: data.user_tasks })
    })
  }

  linkFormatter(cell, row){
    return <Link to={`/tasks/` + cell}>View</Link>;
  }

  render() {
    return (
      <div className="container">
        <Row>
          <div className="text-center">
            <h3>Tasks For Today</h3>
          </div>
        </Row>
        <div className="table">
          <BootstrapTable data={this.state.user_tasks} hover={true} condensed={true} pagination={true} ignoreSinglePage={true}>
            <TableHeaderColumn dataField="id" isKey={true} dataFormat={this.linkFormatter} dataSort={true}>Task Page</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort={true}>Task</TableHeaderColumn>
            <TableHeaderColumn dataField="assign_date" dataSort={true}>Assigned</TableHeaderColumn>
            <TableHeaderColumn dataField="due_date" dataSort={true}>Due</TableHeaderColumn>
          </BootstrapTable>
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

export default Home;
