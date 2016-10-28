import { Chart } from 'react-google-charts';
import React, { Component } from 'react';

class WeekCallChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      week: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: "api/stats",
    }).done(data => {
      this.setState({ week: data.week })
    })
  }


  render() {
      let data = this.state.week.map(m => {
        return(
          [m.contacts_made, m.calls_made]
        )
      })

      if(data.length > 0){
      return (
     <Chart
       chartType="ColumnChart"
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
    } else {
      return(<h1> Loading... </h1>)
    }
  }
};
export default WeekCallChart;
