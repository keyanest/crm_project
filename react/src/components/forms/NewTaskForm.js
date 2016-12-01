import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import Search from 'react-search';
import { Button } from 'react-bootstrap';
import Select from 'react-select';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      body: '',
      due_date: '',
      send_email: false,
      contact: '',
      contactSuggestions: [],
      errors: ''
    };
    this.handleTaskFromSubmit = this.handleTaskFromSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onKeyChange = this.onKeyChange.bind(this);
  }

  contextTypes: {
    history: React.PropTypes.func.isRequired
 };

  componentWillMount() {
    let obj = {};
    let arr = [];
    $.ajax({
      url: "api/contacts",
      type: 'GET',
    }).done(data => {
      for (var i = 0; i < data.length; i++) {
        obj = {id: data[i].id, value: `${data[i].name} ${data[i].last_name}`}
        arr.push(obj)
      };
    })
    this.setState({
      contactSuggestions: arr
    })
  }


  handleTaskFromSubmit(event) {
   event.preventDefault();
   let newTaskData = {
     task: {
       name: this.state.name,
       body: this.state.body,
       due_date: this.state.due_date,
       contact: this.state.contact,
       send_email: this.state.send_email,
     }}
   $.ajax({
     url: "api/tasks",
     type: 'POST',
     data: newTaskData,
   }).done(data => {
     if (data.fullerror) {
       this.setState({ errors: data.fullerror });
     } else {
       this.props.history.pushState(null, `tasks/${data.id}`);
     }
   });
 }

 handleChange(event) {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  }

  onKeyChange(event) {
    this.setState({ contact: event})
  }

  render() {
    return(
      <div className="container">
      <h1>New Task</h1>
      <h1>{this.state.errors}</h1>
        <div>
          <form onSubmit={this.handleTaskFromSubmit}>
            <div className="form-control input-lg">
              <input
              type="text"
              placeholder="Title"
              name="name"
              value={this.name}
              onChange={this.handleChange}
              />
            </div>
            <div className="form-control input-lg">
              <input
              type="text"
              placeholder="Body"
              name="body"
              value={this.body}
              onChange={this.handleChange}
              />
            </div>
            <div className="form-control input-lg">
              <input
                type="date"
                placeholder="Due Date"
                name="due_date"
                value={this.state.due_date}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control input-lg">
              <label>
                <input
                type="radio"
                name="send_email"
                value={true}
                onChange={this.handleChange}
                />
                &nbsp; Send Reminder
              </label>
            </div>
            <div className="form-control input-lg">
              <Search items={this.state.contactSuggestions}
                placeholder='Choose Contact'
                notFoundPlaceholder='Contact Not Found'
                onKeyChange={this.onKeyChange}/>
              </div>
            <div>
              <Button className="buttons" type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default NewTaskForm;
