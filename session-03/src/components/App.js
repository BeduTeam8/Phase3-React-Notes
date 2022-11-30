import React from "react";
import Header from "./Header";
import Form from "./Form.js";
import TodoList from "./TodoList.js";
import Alert from "./Alert.js";

class App extends React.Component {
	state = { todos: [] };

	// on click save todos to local storage

	componentDidMount() {
		this.setState({
			todos: [{ title: "Add your task here", done: true }],
		});
	}

	handleClickDelete = (e, index) => {
		const todos = [...this.state.todos];
		todos.splice(index, 1);

		this.setState({ todos: todos });
	};

	handleClickToggleDone = (e, index) => {
		const todos = [...this.state.todos];
		todos[index].done = !todos[index].done;

		this.setState({ todos });
	};
	addTask = (title) => {
		const exists = this.state.todos.find((e) => title === e.title);
		if (exists) {
			this.setState({ close: true });
			this.setAlert = "Task already exists";
			//time out
			setTimeout(() => {
				this.setState({ close: false });
			}, 5000);
			return;
		}
		if (title === "") {
			// toggle Alert message
			this.setState({ close: true });
			this.setAlert = "Please enter a task";
			//time out
			setTimeout(() => {
				this.setState({ close: false });
			}, 50000);
			return;
		}
		this.setState({
			todos: this.state.todos.concat([{ title, done: false }]),
		});
		// scroll todo
	};

	// togle close alert
	ToggleClose = () => {
		this.setState({ close: !this.state.close });
	};

	// set alert message
	setAlert = (message) => {
		this.setState({ message });
	};

	render() {
		return (
			<div className="wrapper">
				<div className="card frame"></div>
				<Header counter={this.state.todos.length} />
				<Form addTaskFn={this.addTask} />
				<Alert
					close={this.state.close}
					closeFn={this.ToggleClose}
					message={this.setAlert}
				/>
				<TodoList
					tasks={this.state.todos}
					toggleFn={this.handleClickToggleDone}
					deleteFn={this.handleClickDelete}
				/>
			</div>
		);
	}
}

export default App;
