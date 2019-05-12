import PropTypes from "prop-types"

const propTypes = {
	className: PropTypes.string,
	isActive: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isLoading: PropTypes.bool,
	isRounded: PropTypes.bool,
	isSmall: PropTypes.bool,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(["primary", "secondary"]),
	value: PropTypes.string.isRequired
}

const defaultProps = {
	isActive: false,
	isDisabled: false,
	isLoading: false,
	isRounded: null,
	isSmall: false,
	onClick: () => null,
	type: "primary",
	value: ""
}

export { propTypes, defaultProps }
