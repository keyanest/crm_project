import {Chart} from 'react-google-charts';
import React, { Component } from 'react';
import { NavItem, Nav } from 'react-bootstrap';

class ChartMain extends Component {
  constructor(props){
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
  event.preventDefault();
};

  render() {
      return (
        <div className="container">
          <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
            <NavItem eventKey="1" href="#" onClick={() => {this.props.history.pushState(null, '/stats/new')}}>New</NavItem>
            <NavItem eventKey="2" href="#" onClick={() => {this.props.history.pushState(null, '/stats/week')}}>Week</NavItem>
            <NavItem eventKey="3" href="#" onClick={() => {this.props.history.pushState(null, '/stats/month')}}>Month</NavItem>
          </Nav>
          <br />
          <div>
            {this.props.children}
          </div>
      </div>
    );
  }
};
export default ChartMain;
