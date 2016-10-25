import React, { Component } from 'react';
import { Link } from 'react-router';
import ContactProfileItem from './ContactProfileItem';
import { Row, Col } from 'react-bootstrap';

class ContactIndexItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let contactId = `/contacts/${this.props.id}`
    return (
        <Row>
          <Col xs={6} md={4}>
            <ul>
              <li>
                Contact: &nbsp;
                <Link to={contactId}>
                  {this.props.name} {this.props.last_name}
                </Link>
                &nbsp; Company: {this.props.company}
              </li>
            </ul>
          </Col>
        </Row>
    )
  }
}

export default ContactIndexItem;
