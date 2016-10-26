import React, { Component } from 'react';
import { LineChart, BarChart, Bar, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Link } from 'react-router';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class StatChart extends Component {
  constructor(props) {
    super(props);
  }
  render () {
  	return (
      <div className="text-center">
      	<LineChart width={600} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="name"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <br />
        <BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="name"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Bar dataKey="pv" fill="#8884d8" />
         <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
      <AreaChart width={600} height={400} data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
        <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
        <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
      </AreaChart>
        <Link to={'stats/new'}>Add Stats</Link>
      </div>
    );
  }

}

export default StatChart;
