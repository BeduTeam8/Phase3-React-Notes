import React from "react";
import PropTypes from "prop-types";
import "../css/Todo.css";
import Checkmark from "./Checkmark";

class Todo extends React.Component {
	state = {
		done: true,
	};

	render() {
		return (
			<div className={`list-item ${this.props.done ? "done" : ""}`}>
				<Checkmark done={this.state.done} />
				<div className="list-item-text">This is a todo task </div>
				<div className="is-pulled-right">
					<button className="delete is-pulled-right" />
				</div>
			</div>
		);
	}
}

Todo.propTypes = {
	done: PropTypes.bool,
};

export default Todo;
