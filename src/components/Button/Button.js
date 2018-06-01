import cc from "classcat"
import Loading from "../shared/Loading/Loading"
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

const NakedButton = ({ className, value }) => <input className={ className } type="button" value={ value } />

const DefaultButton = styled(NakedButton)`
	display: inline-block;
	padding: 0.25rem 1rem;

	border: 0;
	border-radius: ${ props => (props.isRounded ? `2.5rem` : `0.25rem`) };
	outline: none;
	transition: background-color 100ms ease-in-out, box-shadow 100ms ease-in-out, padding-left 180ms ease-in-out;

	cursor: pointer;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 2rem;
	
	&.isSmall {
		padding: 0.125rem 0.5rem;
		
		font-size: 0.75rem;
		line-height: 1.5rem;
	}

	&.isSmall:focus,
	&.isSmall:focus:hover {
		box-shadow: inset 0 0 0 1px var(--fr-500), 0 0 0 0.125rem var(--fr-focus);
	}
	
	&:focus { z-index: 1; }
	&:focus:not(.isDisabled):not(.isLoading):not(.isSmall) {
		box-shadow: 0 0 0 0.1875rem var(--fr-focus);
	}

	&.isLoading {
		padding-left: 2.5rem;
		
		color: var(--fr-300);

		pointer-events: none;
	}
`

const PrimaryButton = DefaultButton.extend`
	background-color: var(--fr-500);
	color: var(--fr-ground);

	&:hover:not(.isLoading):not(.isActive):not(.isDisabled) {
		background-color: var(--fr-700);
	}

	&.isActive:not(.isDisabled),
	&:active:not(.isDisabled),
	&:active:focus:not(.isDisabled) {
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

	&:hover:not(.isLoading):not(.isActive):not(.isDisabled) {
		box-shadow: inset 0 0 0 1px var(--fr-500);
		color: var(--fr-700);
	}

	&.isActive:not(.isDisabled),
	&:active:not(.isDisabled),
	&:active:focus:not(.isDisabled) {
		background-color: var(--fr-100);
		box-shadow: inset 0 0 0 1px var(--fr-500);
		color: var(--fr-900);
	}

	&.isDisabled {
		box-shadow: inset 0 0 0 1px var(--fr-100);
		color: var(--fr-300);
	}
	
	&:focus:not(.isDisabled):not(.isLoading):not(.isSmall) {
		box-shadow: inset 0 0 0 1px var(--fr-500), 0 0 0 0.1875rem var(--fr-focus);
	}
`

const Button = props => {
	const buttonClasses = cc({
		"radius-max": props.isRounded,
		isActive: props.isActive,
		isDisabled: props.isDisabled,
		isLoading: props.isLoading,
		isSmall: props.small
	})

	return (
		<div className="inline-flex flex-ycenter relative" onClick={ e => props.action(e) }>
			{props.type === "primary" && <PrimaryButton { ...props } className={ buttonClasses } />}
			{props.type === "secondary" && <SecondaryButton { ...props } className={ buttonClasses } />}
			{props.isLoading && <Loading color={ props.type === "secondary" && "var(--fr-500)" } />}
		</div>
	)
}

NakedButton.propTypes = propTypes
NakedButton.defaultProps = defaultProps

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export { Button, NakedButton }
