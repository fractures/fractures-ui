import cc from "classcat"
import IconLoading from "./shared/IconLoading"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	action: PropTypes.func.isRequired,
	isActive: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isLoading: PropTypes.bool,
	isRounded: PropTypes.bool,
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

const ButtonElement = ({ className, value }) => <input className={ className } type="button" value={ value } />

const DefaultButton = styled(ButtonElement)`
	display: inline-block;
	padding: ${ props => (props.small ? `0.125rem 0.5rem` : `0.25rem 1rem`) };

	border: 0;
	border-radius: ${ props => (props.isRounded ? `2.5rem` : `0.25rem`) };
	outline: none;
	transition: background-color 100ms ease-in-out, box-shadow 100ms ease-in-out, padding-left 180ms ease-in-out;

	cursor: pointer;
	font-size: ${ props => (props.small ? `0.75rem` : `0.875rem`) };
	font-weight: 500;
	line-height: ${ props => (props.small ? `1.5rem` : `2rem`) };

	&.isLoading {
		color: var(--fr-300);

		padding-left: 2.5rem;

		pointer-events: none;
	}
`

const PrimaryButton = DefaultButton.extend`
	background-color: var(--fr-500);
	color: var(--fr-ground);

	&:hover:not(.isLoading):not(.isActive) {
		background-color: var(--fr-700);
	}

	&.isActive,
	&:active,
	&:active:focus {
		background-color: var(--fr-900);
		color: var(--fr-100);
	}

	&.isDisabled {
		background-color: var(--fr-300);
		color: var(--fr-100);
	}
`

const SecondaryButton = DefaultButton.extend`
	background-color: var(--fr-ground);
	box-shadow: inset 0 0 0 1px var(--fr-300);
	color: var(--fr-500);

	&:hover:not(.isLoading):not(.isActive) {
		box-shadow: inset 0 0 0 1px var(--fr-500);
		color: var(--fr-700);
	}

	&.isActive,
	&:active,
	&:active:focus {
		background-color: var(--fr-100);
		box-shadow: inset 0 0 0 1px var(--fr-500);
		color: var(--fr-900);
	}

	&.isDisabled {
		box-shadow: inset 0 0 0 1px var(--fr-100);
		color: var(--fr-300);
	}
`

const Button = props => {
	const buttonClasses = cc({
		"radius-max": props.isRounded,
		isDisabled: props.isDisabled,
		isLoading: props.isLoading,
		isActive: props.isActive
	})

	return (
		<div className="inline-flex flex-ycenter relative" onClick={ e => props.action(e) }>
			{props.type === "primary" && <PrimaryButton { ...props } className={ buttonClasses } />}
			{props.type === "secondary" && <SecondaryButton { ...props } className={ buttonClasses } />}
			{props.isLoading && <IconLoading color={ props.type === "secondary" ? "var(--fr-500)" : null } />}
		</div>
	)
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
