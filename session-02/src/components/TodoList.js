import React from "react";
import Todo from "./Todo";

function TodoList() {
	// count todos and send to props
	return (
		<div className="list-wrapper">
			<Todo done />
			<Todo />
			<Todo done />
			<Todo />
			<Todo />
			<Todo done />
			<Todo />
		</div>
	);
}

export default TodoList;
