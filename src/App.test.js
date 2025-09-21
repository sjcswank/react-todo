import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('adds a todo item', () => {
  const div = document.createElement('div');
  const app = ReactDOM.render(<App />, div);
  const todo = { content: "Test Todo" };
  app.addTodo(todo);
  expect(app.state.todos.length).toBe(1);
  expect(app.state.todos[0].content).toBe("Test Todo");
});

it('toggles the complete flag of a todo', () => {
  const div = document.createElement('div');
  const app = ReactDOM.render(<App />, div);
  const todo = { content: "Test Todo" };
  app.addTodo(todo)
  app.toggleComplete(app.state.todos[0].id);
  expect(app.state.todos[0].complete).toBe(true);
  app.toggleComplete(app.state.todos[0].id);
  expect(app.state.todos[0].complete).toBe(false);
});

it('deletes a todo', () => {
  const div = document.createElement('div');
  const app = ReactDOM.render(<App />, div);
  let todo = { content: "Todo 1" };
  app.addTodo(todo);
  todo = { content: "Todo 2"};
  app.addTodo(todo);
  app.deleteTodo(app.state.todos[1].id);
  expect(app.state.todos.length).toBe(1);
  expect(app.state.todos[0].content).toBe("Todo 2");
});