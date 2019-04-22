import React, { Component } from 'react';
import './App.css';
import Todos from './todos';
import TodoForm from './todoForm';

class App extends Component {
  
  state = {
    todos: []
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    this.setState({
      todos: [todo, ...this.state.todos]
    })

  }

  toggleComplete = (id) => {
    let todos = this.state.todos.map(todo => {
      if(todo.id === id) 
        return (
          {id: todo.id,
          content: todo.content,
          complete: !todo.complete})
      return (todo)
    })

    this.setState({
      todos: todos
    })

  }

  deleteTodo = (id) => {
    const filteredTodos = this.state.todos.filter(todo => todo.id !== id)
    
    this.setState({
      todos: filteredTodos});
  console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <TodoForm addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} 
        toggleComplete={this.toggleComplete} 
        deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
