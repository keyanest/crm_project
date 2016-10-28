import {Chart} from 'react-google-charts';
import React, { Component } from 'react';
import { NavItem, Nav } from 'react-bootstrap';

class ChartMain extends Component {
  constructor(props){
    super(props);
  }
  render() {
      return (
        <div className="container">
          <Nav bsStyle="tabs" activeKey="1">
            <NavItem eventKey="1" href="#" onClick={() => {this.props.history.pushState(null, '/stats/new')}}>New</NavItem>
            <NavItem eventKey="2" href="#" onClick={() => {this.props.history.pushState(null, '/stats/weekcalls')}}>Weekly Calls</NavItem>
            <NavItem eventKey="3" href="#" onClick={() => {this.props.history.pushState(null, '/stats/monthcalls')}}>Monthly Calls</NavItem>
            <NavItem eventKey="4" href="#" onClick={() => {this.props.history.pushState(null, '/stats/weekopps')}}>Weekly Opportunities</NavItem>
            <NavItem eventKey="5" href="#" onClick={() => {this.props.history.pushState(null, '/stats/monthopps')}}>Monthly Opportunities</NavItem>
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
