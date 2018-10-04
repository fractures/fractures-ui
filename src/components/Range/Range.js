import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	className: PropTypes.string,
	set: PropTypes.func.isRequired,
	value: PropTypes.number
}

const defaultProps = {
	set: () => null,
	value: 0
}

const NakedRange = props =>

	// prettier-ignore
	<input
		className={ props.className }
		defaultValue={ props.value }
		onChange={ e => props.set(e.target.value) }
		type="range"
	/>

const Range = styled(NakedRange)`
	-webkit-appearance: none;

	width: 100%;

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

NakedRange.propTypes = propTypes
NakedRange.defaultProps = defaultProps

Range.propTypes = propTypes
Range.defaultProps = defaultProps

export default Range
