import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      body: '',
      due_date: ''
    };
    this.handleContactFromSubmit = this.handleContactFromSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  contextTypes: {
    history: React.PropTypes.func.isRequired
 };

  handleContactFromSubmit(event) {
   event.preventDefault();
   let newTaskData = {
     task: {
       name: this.state.name,
       body: this.state.body,
       due_date: this.state.due_date,
     }}
     debugger
   $.ajax({
     url: "api/tasks",
     type: 'POST',
     data: newTaskData,
   }).done(data => {
     if (data.errors) {
       this.setState({ errors: data.fullerror });
     } else {
       this.props.history.pushState(null, '/tasks');
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
      <div>
      <h1>New Task</h1>
      <h1>{this.state.fullerror}</h1>
        <div>
          <form onSubmit={this.handleContactFromSubmit}>
            <div>
              <input
              type="text"
              placeholder="Title"
              name="name"
              value={this.name}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input
              type="text"
              placeholder="Body"
              name="body"
              value={this.body}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input
              type="text"
              placeholder="Due Date"
              name="due_date"
              value={this.due_date}
              onChange={this.handleChange}
              />
            </div>
            <div>
              <input type="submit" className="button" value="Add" />
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default NewTaskForm;
