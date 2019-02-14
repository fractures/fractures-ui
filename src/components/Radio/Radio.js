import classNames from "@sindresorhus/class-names"
import Label from "../shared/Label/Label"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	className: PropTypes.string,
	isDisabled: PropTypes.bool,
	label: PropTypes.string,
	set: PropTypes.func.isRequired,
	state: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
}

const defaultProps = {
	isDisabled: false,
	label: "",
	set: () => null,
	state: false,
	value: ""
}

const NakedRadio = props => {
	const radioClasses = classNames({
		"fr-radio--disabled": props.isDisabled
	})

	return (
		<label className={ `${ props.className } ${ radioClasses }` }>
			<input
				aria-checked={ props.state === props.value }
				type="radio"
				name="radio"
				onChange={ () => props.set(props.value) }
				defaultChecked={ props.state === props.value }
			/>
			<span className="fr-radio__checkmark" />
			<Label>{props.label}</Label>
		</label>
	)
}

const Radio = styled(NakedRadio)`
	position: relative;

	box-sizing: border-box;
	display: flex;

	cursor: pointer;
	user-select: none;

	&.hl-radio--disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	input {
		display: none;
		height: 0;
		width: 0;

		visibility: hidden;
	}

	input:checked ~ .hl-radio__checkmark {
		background-color: var(--fr-ground);
	}

	.hl-radio__checkmark {
		box-sizing: inherit;
		height: 1.5rem;
		margin-right: 0.5rem;
		width: 1.5rem;

		background-color: var(--fr-ground);
		border: 2px solid var(--fr-500);
		border-radius: 100%;
	}

	.hl-radio__checkmark:after {
		position: absolute;
		top: 0.3125rem;
		left: 0.3125rem;

		opacity: 0;
		height: 0.875rem;
		width: 0.875rem;

		background: var(--fr-500);
		border-radius: 100%;
		transform: scale(0);
		transition: all 100ms ease-in-out;

		content: "";
	}

	input:checked ~ .hl-radio__checkmark:after {
		opacity: 1;

		transform: scale(1);
	}
`

NakedRadio.propTypes = propTypes
NakedRadio.defaultProps = defaultProps

Radio.propTypes = propTypes
Radio.defaultProps = defaultProps

export default Radio
