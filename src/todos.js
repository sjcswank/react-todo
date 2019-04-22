import React from 'react';
import './App.css';

const Todo = ({todos, toggleComplete, deleteTodo}) => {

	const styleCrossedOff = {
		position: 'relative',
		textDecoration: "line-through", 
		display: "inline-block",
		padding: "5px"
	}

	const styleTodo = {
		position: 'relative', 
		display: "inline-block",
		padding: "5px"
	}

	const todoList = todos.length ? (
		todos.map(todo => {
			if(todo.complete)
				return(
					<div key={todo.id}>
						<div 
						onClick={() => toggleComplete(todo.id)}
						className="crossedOff todo">
						{todo.content}
						</div>
						<button onClick={() => deleteTodo(todo.id)}>X</button>
					</div>)
			return (<div key={todo.id}>
						<div 
						onClick={() => toggleComplete(todo.id)}
						className="todo">
						{todo.content}</div>
						<button onClick={() => deleteTodo(todo.id)}>X</button>
					</div>)
		})
	)
	:
	(<p>You have no todos left!</p>)


	return (
	  <div>
	    {todoList}
	  </div>
	);
}

export default Todo;