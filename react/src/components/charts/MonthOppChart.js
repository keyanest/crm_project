import { Chart } from 'react-google-charts';
import React, { Component } from 'react';

class MonthOppChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      month: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: "api/stats",
    }).done(data => {
      this.setState({ month: data.month })
    })
  }


  render() {
      let data = this.state.month.map(m => {
        return(
          [m.deals_won, m.deals_lost]
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
           'label': 'Won'
         },
         {
           'type': 'number',
           'label': 'Lost'
         }
       ]}
       options={{
         title: 'Month',
         hAxis: {title: 'Won', minValue: 0, maxValue: 5},
         vAxis: {title: 'Lost', minValue: 0, maxValue: 5},
       }}
       width="100%"
       height="400px"
       legend_toggle
      />
      );
    } else {
      return(<h1 className="container"> Loading... </h1>)
    }
  }
};
export default MonthOppChart;
