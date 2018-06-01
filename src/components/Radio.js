import cc from "classcat"
import Label from "./shared/Label"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
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
	const radioClasses = cc({
		"fr-radio flex flex-gap-1 relative": true,
		"fr-radio--disabled": props.isDisabled
	})

	return (
		<label className={ `${ props.className } ${ radioClasses }` }>
			<input
				type="radio"
				name="radio"
				className="h-0 w-0 none absolute"
				onChange={ () => props.set(props.value) }
				defaultChecked={ props.state === props.value }
			/>
			<span className="fr-radio__checkmark radius-max" />
			<Label>{props.label}</Label>
		</label>
	)
}

const Radio = styled(NakedRadio)`
	cursor: pointer;
	user-select: none;
	
	&.fr-radio--disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	& input:checked ~ .fr-radio__checkmark {
		background-color: var(--fr-ground);
	}

	& .fr-radio__checkmark {
		height: 1.5rem;
		width: 1.5rem;

		background-color: var(--fr-ground);
		border: 2px solid var(--fr-500);
	}

	& .fr-radio__checkmark:after {
		position: absolute;
		top: 0.3125rem;
		left: 0.3125rem;

		opacity: 0;
		height: 0.875rem;
		width: 0.875rem;

		border-radius: 100%;
		background: var(--fr-500);
		transform: scale(0);
		transition: all 120ms ease-in-out;

		content: "";
	}

	& input:checked ~ .fr-radio__checkmark:after {
		opacity: 1;

		transform: scale(1);
	}
`

Radio.propTypes = propTypes
Radio.defaultProps = defaultProps

export default Radio
