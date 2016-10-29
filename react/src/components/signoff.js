import React, { Component } from 'react';

class SignOff extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    $.ajax({
      url: '/users/sign_out',
      contentType: 'application/json',
      method: 'DELETE'
    }).done(data => {
      window.location.href = "/";
    });
  }

  render () {
    return (
      <div>
        Signing Off...
      </div>
    );
  }
}

export default SignOff;
