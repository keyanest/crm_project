import {Chart} from 'react-google-charts';
import React, { Component } from 'react';

class MonthCallChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      month: []
    }
  }

  componentWillMount() {
    $.ajax({
      url: "api/stats",
    }).done(data => {
      this.setState({ month: data.month })
    })
  }


  render() {
      return (
     <Chart
       chartType="BarChart"
       data={[['Contacts', 'Attempts'], [100, 5], [90, 8]]}
       options={{
         title: 'Week',
         hAxis: {title: 'Contacts', minValue: 0, maxValue: 20},
         vAxis: {title: 'Attempts', minValue: 50, maxValue: 125},
       }}
       graph_id="ScatterChart"
       width="100%"
       height="400px"
       legend_toggle
      />

      );
  }
};
export default MonthCallChart;
