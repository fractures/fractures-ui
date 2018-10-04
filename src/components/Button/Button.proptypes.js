import PropTypes from "prop-types"

const propTypes = {
	action: PropTypes.func.isRequired,
	className: PropTypes.string,
	isActive: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isLoading: PropTypes.bool,
	isRounded: PropTypes.bool,
	isSmall: PropTypes.bool,
	type: PropTypes.oneOf(["primary", "secondary"]),
	value: PropTypes.string.isRequired
}

const defaultProps = {
	action: () => null,
	isActive: false,
	isDisabled: false,
	isLoading: false,
	isRounded: null,
	type: "primary",
	value: ""
}

export { propTypes, defaultProps }
