import React, { Component } from 'react';

export default class TodoForm extends Component {
  
  state = {
    content: ""
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    })
  }

  render() {
    return (
      <form className="todoForm" onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}
        value={this.state.content}/>
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

