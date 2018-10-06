import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	className: PropTypes.string,
	max: PropTypes.number,
	min: PropTypes.number,
	set: PropTypes.func.isRequired,
	value: PropTypes.number
}

const defaultProps = {
	min: 0,
	max: 100,
	set: () => null,
	value: 0
}

const NakedRange = props => (
	<input
		className={ props.className }
		defaultValue={ props.value }
		onChange={ e => props.set(e.target.value) }
		type="range"
		min={ props.min }
		max={ props.max }
	/>
)

const NakedRangeWrap = styled(NakedRange)`
	width: 100%;

	&:before,
	&:after {
		position: absolute;
		top: 0;

		display: block;
		height: 2rem;
		max-width: 2rem;
		width: 2rem;

		background-color: var(--fr-100);
		color: var(--fr-500);

		line-height: 2rem;
		text-align: center;
	}

	&:after {
		right: 0;
		left: auto;

		content: attr(max);
	}

	&:before {
		left: -0.25rem;

		content: attr(min);
	}

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
		position: relative;
		z-index: 1;

		height: 1.5rem;
		width: 1.5rem;
		-webkit-appearance: none;

		border-radius: 1rem;
		border: 0;

		background: var(--fr-500);
		cursor: pointer;
		transform: translateY(-0.5rem);
	}

	&:focus::-webkit-slider-thumb {
		box-shadow: 0 0 0 0.1875rem var(--fr-focus);
	}
`

const NakedRangeContainer = props => (
	<div className={ props.className }>
		<div className="fr-range__value" style={ { marginLeft: `${ props.value }%` } }>
			{props.value}
		</div>
		<NakedRangeWrap { ...props } />
	</div>
)

const Range = styled(NakedRangeContainer)`
	position: relative;

	-webkit-appearance: none;
	width: 100%;

	background-color: transparent;

	.fr-range__value {
		width: 3rem;

		background: red;
	}
`

NakedRange.propTypes = propTypes
NakedRange.defaultProps = defaultProps

Range.propTypes = propTypes
Range.defaultProps = defaultProps

export default Range
