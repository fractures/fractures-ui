import ButtonLoading from "./components/ButtonLoading"
import ButtonPrimary from "./components/ButtonPrimary"
import ButtonSecondary from "./components/ButtonSecondary"
import cc from "classcat"
import PropTypes from "prop-types"
import React from "react"

const propTypes = {
	action: PropTypes.func.isRequired,
	className: PropTypes.string,
	isActive: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isLoading: PropTypes.bool,
	isRounded: PropTypes.bool,
	small: PropTypes.bool,
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

const Button = props => {
	const buttonClasses = cc({
		"radius-max": props.isRounded,
		isActive: props.isActive,
		isDisabled: props.isDisabled,
		isLoading: props.isLoading,
		isSmall: props.small
	})

	return (
		<div style={ { position: "relative", display: "inline-flex", alignItems: "center" } } onClick={ e => props.action(e) }>
			{props.type === "primary" && <ButtonPrimary { ...props } className={ buttonClasses } />}
			{props.type === "secondary" && <ButtonSecondary { ...props } className={ buttonClasses } />}
			{props.isLoading && (
				<ButtonLoading
					color={ props.type === "secondary" ? "var(--fr-500)" : null }
					size={ props.small ? 10 : 20 }
					isSmall={ props.small }
				/>
			)}
		</div>
	)
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
