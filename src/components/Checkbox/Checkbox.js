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
		"fr-checkbox": true,
		"fr-checkbox--checked": props.isChecked,
		"fr-checkbox--unchecked": !props.isChecked,
		"fr-checkbox--disabled": props.isDisabled
	})

	return (
		<div className={ props.className }>
			<label className={ checkboxClasses }>
				<input type="checkbox" defaultChecked={ props.isChecked } onChange={ () => props.check() } />
				<span className="fr-checkbox__mark" />
				<Label>{props.label}</Label>
			</label>
		</div>
	)
}

const Checkbox = styled(NakedCheckbox)`
	box-sizing: border-box;

	user-select: none;

	label {
		cursor: pointer;
	}

	input {
		display: none;
		height: 0;
		width: 0;

		visibility: none;
	}

	.fr-checkbox {
		position: relative;

		display: flex;
	}

	.fr-checkbox__mark {
		display: flex;
		height: 1.5rem;
		margin-right: 0.5rem;
		overflow: hidden;
		min-width: 1.5rem;
		width: 1.5rem;

		background-color: var(--fr-ground);
		border-radius: 0.125rem;
		border: 2px solid var(--fr-500);
		transition: border-color 100ms ease-in-out;
	}

	.fr-checkbox__mark:after {
		left: 0.625rem;
		top: 0.25rem;
		position: absolute;

		box-sizing: inherit;
		height: 0.875rem;
		opacity: 0;
		width: 0.375rem;

		border: solid var(--fr-500);
		border-width: 0 0.1875rem 0.1875rem 0;
		transform: rotate(45deg) translateY(-0.125rem) translateX(-0.125rem);
		transition: all 100ms ease-in-out;
		content: " ";
	}

	.fr-checkbox--disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	input:checked ~ .fr-checkbox__mark:after {
		opacity: 1;
		transform: rotate(45deg) translateY(0) translateX(0);
	}

	input:checked ~ .fr-checkbox__mark {
		background-color: var(--fr-ground);
	}
`

NakedCheckbox.propTypes = propTypes
NakedCheckbox.defaultProps = defaultProps

Checkbox.propTypes = propTypes
Checkbox.defaultProps = defaultProps

export default Checkbox
