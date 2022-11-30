import React from "react";
import PropTypes from "prop-types";

// small error message
function Alert(props) {
	return (
		<div className={`notification" ${props.close ? "is-Shown" : "is-hidden"}`}>
			<button className="delete" onClick={props.closeFn} />
			{props.message}
		</div>
	);
}

Alert.propTypes = {
	close: PropTypes.bool,
	closeFn: PropTypes.func.isRequired,
	message: PropTypes.string.isRequired,
};
export default Alert;
