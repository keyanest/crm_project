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
    let data;
    if (this.state.month.length > 0) {
      data = this.state.month.map(m => {
        return(
          [m.contacts_made, m.calls_made]
        )
      })
    }
      return (
     <Chart
       chartType="BarChart"
       rows={data}
       columns={[
         {
           'type': 'number',
           'label': 'Contacts'
         },
         {
           'type': 'number',
           'label': 'Attempts'
         }
       ]}
       options={{
         title: 'Week',
         hAxis: {title: 'Contacts', minValue: 0, maxValue: 20},
         vAxis: {title: 'Attempts', minValue: 50, maxValue: 125},
       }}
       width="100%"
       height="400px"
       legend_toggle
      />

      );
  }
};
export default MonthCallChart;
