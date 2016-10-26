import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            <h3>Call me maybe?</h3>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default About;
