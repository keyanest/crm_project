import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { Button } from 'react-bootstrap';

class StatsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calls_made: "",
      contacts_made: "",
      meetings_set: "",
      deals_won: "",
      deals_lost: "",
    };
    this.handleContactFromSubmit = this.handleContactFromSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleContactFromSubmit(event) {
   event.preventDefault();
   let newStatData = {
     stat: {
       calls_made: this.state.calls_made,
       contacts_made: this.state.contacts_made,
       meetings_set: this.state.meetings_set,
       deals_won: this.state.deals_won,
       deals_lost: this.state.deals_lost,
     }}
   $.ajax({
     url: "api/stats",
     type: 'POST',
     data: newStatData,
   }).done(data => {
     if (data.fullerror) {
       this.setState({ errors: data.fullerror });
     } else {
       this.props.history.pushState(null, '/');
     }
   });
 }
  handleChange(event) {
     let nextState = {};
     nextState[event.target.name] = event.target.value;
     this.setState(nextState);
   }

  render() {
    return(
      <div className="container">
      <h1>New Stats</h1>
      <form onSubmit={this.handleStatFromSubmit}>
        <div className="form-control input-lg">
          <input
          type="number"
          placeholder="Calls Made"
          name="calls_made"
          onChange={this.handleChange}
          />
        </div>
        <div className="form-control input-lg">
          <input
          type="number"
          placeholder="Contacts Made"
          name="contacts_made"
          onChange={this.handleChange}
          />
        </div>
        <div className="form-control input-lg">
          <input
          type="number"
          placeholder="Meetings Set"
          name="meetings_set"
          onChange={this.handleChange}
          />
        </div>
        <div className="form-control input-lg">
          <input
          type="number"
          placeholder="Deals Won"
          name="deals_won"
          onChange={this.handleChange}
          />
        </div>
        <div className="form-control input-lg">
          <input
          type="number"
          placeholder="Deals Lost"
          name="deals_lost"
          onChange={this.handleChange}
          />
        </div>
        <div>
          <Button className="buttons" type="submit">Submit</Button>
        </div>
      </form>
      </div>
    )
  }
}


export default StatsForm;
