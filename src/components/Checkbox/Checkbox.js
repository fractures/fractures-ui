import cc from "classcat"
import Label from "../Label/Label"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	check: PropTypes.func.isRequired,
	className: PropTypes.string,
	isChecked: PropTypes.bool,
	isDisabled: PropTypes.bool,
	label: PropTypes.string.isRequired
}

const defaultProps = {
	check: () => null,
	isChecked: false,
	isDisabled: false,
	label: ""
}

const NakedCheckbox = props => {
	const checkboxClasses = cc({
		"fr-checkbox flex flex-gap-1 relative": true,
		"fr-checkbox--checked": props.isChecked,
		"fr-checkbox--unchecked": !props.isChecked,
		"fr-checkbox--disabled": props.isDisabled
	})

	return (
		<div className={ props.className }>
			<label className={ checkboxClasses }>
				<input type="checkbox" defaultChecked={ props.isChecked } onChange={ () => props.check() } className="h-0 w-0 none" />
				<span className="fr-checkbox__mark" />
				<Label>{props.label}</Label>
			</label>
		</div>
	)
}

const Checkbox = styled(NakedCheckbox)`
	cursor: pointer;
	user-select: none;

	& .fr-checkbox--disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	& .fr-checkbox__mark {
		height: 1.75rem;
		overflow: hidden;
		width: 1.75rem;

		background-color: var(--fr-ground);
		border-radius: 0.125rem;
		border: 2px solid var(--fr-500);
		transition: border-color 120ms ease-in-out;
	}

	& .fr-checkbox__mark:after {
		left: 0.625rem;
		top: 0.25rem;
		position: absolute;

		height: 1rem;
		opacity: 0;
		width: 0.5rem;

		border: solid var(--fr-500);
		border-width: 0 0.1875rem 0.1875rem 0;
		transform: rotate(45deg) translateY(-0.125rem) translateX(-0.125rem);
		transition: all 120ms ease-in-out;
		content: " ";
	}

	& input:checked ~ .fr-checkbox__mark:after {
		opacity: 1;
		transform: rotate(45deg) translateY(0) translateX(0);
	}

	& input:checked ~ .fr-checkbox__mark {
		background-color: var(--fr-ground);
	}
`

const Toggle = styled(NakedCheckbox)`
	cursor: pointer;
	user-select: none;

	& .fr-checkbox--disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	& .fr-checkbox__mark {
		height: 1.5rem;
		overflow: hidden;
		width: 3rem;

		background-color: var(--fr-500);
		border-radius: 3rem;
	}

	& .fr-checkbox__mark:after {
		left: 0.25rem;
		top: 0.25rem;
		position: absolute;

		height: 1rem;
		width: 1rem;

		background-color: white;
		border-radius: 100%;
		transition: all 120ms ease-in-out;
		content: " ";
	}

	& .fr-checkbox__mark:before {
		left: 0;
		top: 0;
		position: absolute;

		padding: 0 0.5rem;
		width: 3rem;

		color: white;

		content: "Off";
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1.5rem;
		text-align: right;
	}

	& input:checked ~ .fr-checkbox__mark:after {
		left: 1.75rem;
	}

	& input:checked ~ .fr-checkbox__mark:before {
		content: "On";
		text-align: left;
	}

	& input:checked ~ .fr-checkbox__mark {
		background-color: var(--fr-700);
	}
`

NakedCheckbox.propTypes = propTypes
NakedCheckbox.defaultProps = defaultProps

Checkbox.propTypes = propTypes
Checkbox.defaultProps = defaultProps

Toggle.propTypes = propTypes
Toggle.defaultProps = defaultProps

export { Checkbox, NakedCheckbox, Toggle }
