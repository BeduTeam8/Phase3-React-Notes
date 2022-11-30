import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";
import "../css/index.css";

function TodoList(props) {
	// count todos and send to props
	return (
		<div className="list-wrapper">
			{props.tasks.map((element, i) => (
				<Todo
					key={i}
					done={element.done}
					title={element.title}
					deleteFn={(element) => props.deleteFn(element, i)}
					toggleFn={(element) => props.toggleFn(element, i)}
				/>
			))}
		</div>
	);
}

TodoList.propTypes = {
	tasks: PropTypes.array,
	deleteFn: PropTypes.func.isRequired,
	toggleFn: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
	tasks: [],
};
export default TodoList;
