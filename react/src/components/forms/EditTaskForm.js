import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class EditTasKForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
    }
  }

  contextTypes: {
    history: React.PropTypes.func.isRequired
  }

  componentWillMount() {
   let id = this.props.params.id
   let updateTaskData = {
      task: {
        completed: true
      }}
   $.ajax({
     url: "api/tasks/" + id,
     type: 'PATCH',
     data: updateTaskData,
   }).done(data => {
       this.props.history.pushState(null, ("/tasks"));
   });
 }

  render() {
    return(
      <div>
      </div>
    )
  }
}

export default EditTasKForm;
