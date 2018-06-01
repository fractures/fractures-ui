import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const propTypes = {
	set: PropTypes.func.isRequired,
	value: PropTypes.number
}

const defaultProps = {
	set: () => null,
	value: 0
}

const NakedInput = props => (
	<input type="range" className={ `${ props.className } w-100` } defaultValue={ props.value } onChange={ e => props.set(e.target.value) } />
)

const Range = styled(NakedInput)`
	-webkit-appearance: none;

	background-color: transparent;

	&:focus {
		outline: none;
	}

	&::-webkit-slider-runnable-track {
		height: 0.5rem;
		width: 100%;

		background-color: var(--fr-100);
		border-radius: 1rem;

		cursor: pointer;
	}

	&::-webkit-slider-thumb {
		height: 1.125rem;
		width: 1.125rem;

		border-radius: 1rem;
		border: 0;

		background: var(--fr-500);
		cursor: pointer;
		transform: translateY(-0.375rem);
		-webkit-appearance: none;
	}

	&:focus::-webkit-slider-thumb {
		box-shadow: 0 0 0 0.1875rem var(--fr-focus);
	}
`

Range.propTypes = propTypes
Range.defaultProps = defaultProps

export default Range
