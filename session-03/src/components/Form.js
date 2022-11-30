import React from "react";
import PropTypes from "prop-types";

class Form extends React.Component {
	state = { value: "" };
	handleChange = (element) => {
		this.setState({ value: element.target.value });
	};

	handleSubmit = (element) => {
		element.preventDefault();
		this.props.addTaskFn(this.state.value);
		this.setState({ value: "" });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					className="input"
					onChange={this.handleChange}
					placeholder="Create a task"
					value={this.state.value}
				/>
				<button className="button">Send</button>
			</form>
		);
	}
}

Form.propTypes = {
	addTaskFn: PropTypes.func.isRequired,
};

export default Form;
