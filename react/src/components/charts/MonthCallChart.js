import {Chart} from 'react-google-charts';
import React, { Component } from 'react';

class MonthCallChart extends Component {
  constructor(props){
    super(props);
    this.state={
      options: {
          title: 'Month',
          hAxis: {title: 'Contacts', minValue: 0, maxValue: 20},
          vAxis: {title: 'Attempts', minValue: 50, maxValue: 125},
          legend: 'none'
      },
      rows: [
          [ 58,      112],
          [ 54,      45.5],
          [ 111,     114],
          [ 64,      35],
          [ 73,      43.5],
          [ 86.5,    57]
      ],
      columns: [
       {
       'type': 'number',
       'label' : 'Age'
       },
       {
       'type' : 'number',
       'label' : 'Weight'
       }
      ]
    }
  }
  render() {
      return (

        <Chart chartType="BarChart" rows={this.state.rows} columns={this.state.columns} options={this.state.options} graph_id="ScatterChart"  width={"100%"} height={"400px"}  legend_toggle={true} />
      );
  }
};
export default MonthCallChart;