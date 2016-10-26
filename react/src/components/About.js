import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            Salesforce pioneered a new technology model with our cloud platform, a new pay-as-you-go business model focused on customer success, and a new integrated corporate philanthropy model, called the 1-1-1 model, by which we donate 1% of our equity, 1% of our employee time, and 1% of our product to improve communities around the world.

            This vision has fueled our incredible growth, made us the global leader in CRM, defined the era of enterprise cloud computing, and inspired a new philanthropic model for all companies to follow. Today, Salesforce’s Customer Success Platform provides groundbreaking cloud services for sales, service, marketing, community, analytics, apps and the Internet of Things.

            Thanks to our dedicated employees, partners, and the customers we serve, Salesforce is the fastest growing top 10 software company in the world and has been ranked as one of the world’s most innovative companies by Forbes for five years in a row. Salesforce empowers companies to connect with their customers in a whole new way, run their business from their phones, create one-to-one customer journeys and make smarter, more predictive decisions from anywhere in real-time.
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default About;
