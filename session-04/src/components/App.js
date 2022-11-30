import React from "react";
import Header from "./Header";
import Form from "./Form.js";
import TodoList from "./TodoList.js";
import Alert from "./Alert.js";

function App() {
	// declare state variables
	const [todos, setTodos] = React.useState([]);

	// declare show and set show variables
	const [show, setShow] = React.useState(true);

	// declare toggle variables
	const [close, setToggle] = React.useState(false);

	// declare message variables
	const [message, setMessage] = React.useState("");

	// create a function to add a task
	React.useEffect(() => {
		setTodos([{ title: "Add your task here", done: true }]);
	}, []);

	// function to delete a task
	const handleClickDelete = (e, index) => {
		// create a copy of the todos array
		const tasks = [...todos];

		// remove the task from the array
		tasks.splice(index, 1);

		// update the todos array
		setTodos(tasks);
	};

	// function to toggle a task as done or pending
	const handleClickToggleDone = (e, index) => {
		// create a copy of the todos array
		const tasks = [...todos];

		// toggle the done property of the task
		todos[index].done = !todos[index].done;

		// update the todos array
		setTodos(tasks);
	};

	// function to add a task
	const addTask = (title) => {
		// create a copy of the todos array and find
		const exists = todos.find((e) => title === e.title);

		// if the task does exist send alert message
		if (exists) {
			setMessage("Task already exists");
			setToggle(true);
			setTimeout(() => {
				setToggle(false);
			}, 3000);
			return;
		}

		// if the task sent is empty send error message
		if (title === "") {
			// set the show variable to true
			setToggle(true);
			// set message
			setMessage("Please enter a task");
			// set time out
			setTimeout(() => {
				setToggle(false);
			}, 3000);
			return;
		}
		setTodos(todos.concat([{ title, done: false }]));
	};

	// togle close alert
	const ToggleClose = (isclosed) => {
		setToggle(!isclosed);
	};

	// function to toggle the show/hide button
	const filtered = todos.filter((e) => !e.done || e.done === show);

	// return the JSX
	return (
		<div className="wrapper">
			<div className="card frame">
				<Header counter={filtered.length} show={show} toggleDone={setShow} />
				<Form addTaskFn={addTask} />
				<Alert closeFn={ToggleClose} message={message} close={close} />
				<TodoList
					tasks={filtered}
					toggleFn={handleClickToggleDone}
					deleteFn={handleClickDelete}
				/>
			</div>
		</div>
	);
}

export default App;
