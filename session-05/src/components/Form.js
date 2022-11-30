import React from "react";
import PropTypes from "prop-types";

function Form(props) {
	// state = { value: '' }
	const [value, setValue] = React.useState("");

	const handleChange = (e) => {
		// this.setState({ value: e.target.value });
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// this.props.addTaskFn(this.state.value);
		props.addTaskFn(value);

		// this.setState({ value: '' });
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				onChange={handleChange}
				placeholder="Create a task"
				value={value}
			/>
			<button className="button">Send</button>
		</form>
	);
}

Form.propTypes = {
	addTaskFn: PropTypes.func.isRequired,
};

export default Form;
