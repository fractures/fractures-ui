import classNames from "@sindresorhus/class-names"
import Label from "../shared/Label/Label"
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

const NakedToggle = props => {
	const checkboxClasses = classNames("fr-toggle", {
		"fr-toggle--checked": props.isChecked,
		"fr-toggle--unchecked": !props.isChecked,
		"fr-toggle--disabled": props.isDisabled
	})

	return (
		<div className={ props.className }>
			<label className={ checkboxClasses }>
				<input type="checkbox" defaultChecked={ props.isChecked } onChange={ () => props.check() } />
				<span className="fr-toggle__mark" />
				<Label>{props.label}</Label>
			</label>
		</div>
	)
}

const Toggle = styled(NakedToggle)`
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

	.hl-toggle {
		position: relative;

		display: flex;
	}

	.hl-toggle--disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.hl-toggle__mark {
		box-sizing: border-box;
		height: 1.5rem;
		margin-right: 0.5rem;
		overflow: hidden;
		width: 3rem;

		background-color: var(--fr-500);
		border-radius: 3rem;
	}

	.hl-toggle__mark:after {
		left: 0.25rem;
		top: 0.25rem;
		position: absolute;

		box-sizing: inherit;
		height: 1rem;
		width: 1rem;

		background-color: var(--fr-ground);
		border-radius: 100%;
		transition: all 100ms ease-in-out;
		content: " ";
	}

	.hl-toggle__mark:before {
		left: 0;
		top: 0;
		position: absolute;

		box-sizing: inherit;
		padding: 0 0.5rem;
		width: 3rem;

		color: var(--fr-ground);

		content: "Off";
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1.5rem;
		text-align: right;
	}

	input:checked ~ .hl-toggle__mark:after {
		left: 1.75rem;
	}

	input:checked ~ .hl-toggle__mark:before {
		content: "On";
		text-align: left;
	}

	input:checked ~ .hl-toggle__mark {
		background-color: var(--fr-900);
	}
`

NakedToggle.propTypes = propTypes
NakedToggle.defaultProps = defaultProps

Toggle.propTypes = propTypes
Toggle.defaultProps = defaultProps

export default Toggle
