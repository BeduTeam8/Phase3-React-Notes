import React from "react";
import Header from "./Header";
import Form from "./Form.js";
import TodoList from "./TodoList.js";

function App() {
	return (
		<div className="wrapper">
			<div className="card frame"></div>
			<Header />
			<Form />
			<TodoList />
		</div>
	);
}

export default App;
