import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


class AppContact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            Call us
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default AppContact;
