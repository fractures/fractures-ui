import classNames from "@sindresorhus/class-names"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	className: PropTypes.string,
	isVerbose: PropTypes.bool,
	max: PropTypes.number.isRequired,
	min: PropTypes.number.isRequired,
	set: PropTypes.func.isRequired,
	step: PropTypes.number,
	value: PropTypes.number
}

const defaultProps = {
	isVerbose: false,
	max: 100,
	min: 0,
	set: () => null,
	step: null,
	value: 0
}

const NakedRange = props => {
	const nakedClasses = classNames("fr-range", {
		"fr-range--verbose": props.isVerbose
	})

	return (
		<input
			className={ `${ props.className } ${ nakedClasses }` }
			defaultValue={ props.value }
			onChange={ e => props.set(e.target.value) }
			type="range"
			step={ props.step }
			min={ props.min }
			max={ props.max }
		/>
	)
}

const NakedRangeWrap = styled(NakedRange)`
	position: relative;

	display: flex;
	margin: 0;
	padding: 0;
	width: 100%;

	&.hl-range--verbose:before,
	&.hl-range--verbose:after {
		display: block;
		height: 1.5rem;
		padding: 0 0.5rem;

		background-color: var(--fr-100);
		border-radius: 1rem;
		color: var(--fr-500);

		font-size: 0.75rem;
		line-height: 1.5rem;
		text-align: center;
	}

	&.hl-range--verbose:after {
		right: 0;

		margin-left: 0.5rem;

		content: attr(max);
	}

	&.hl-range--verbose:before {
		left: 0;

		margin-right: 0.5rem;

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

		height: 1rem;
		width: 1rem;
		-webkit-appearance: none;

		border-radius: 1rem;
		border: 0;

		background: var(--fr-500);
		cursor: pointer;
		transform: translateY(calc(-0.5rem + 0.25rem));
	}

	&:focus::-webkit-slider-thumb {
		box-shadow: 0 0 0 0.1875rem var(--fr-focus);
	}
`

const NakedRangeContainer = props => (
	<div className={ props.className }>
		<NakedRangeWrap { ...props } />
		{props.isVerbose && <div className="fr-range__value">{props.value}</div>}
	</div>
)

const Range = styled(NakedRangeContainer)`
	position: relative;

	display: flex;
	width: 100%;

	background-color: transparent;
	-webkit-appearance: none;

	.hl-range__value {
		display: block;
		height: 1.5rem;
		padding: 0 0.5rem;
		margin-left: 0.5rem;

		background-color: var(--fr-500);
		border-radius: 1rem;
		color: var(--fr-ground);

		font-size: 0.75rem;
		font-weight: bold;
		line-height: 1.5rem;
		text-align: center;
	}
`

NakedRange.propTypes = propTypes
NakedRange.defaultProps = defaultProps

Range.propTypes = propTypes
Range.defaultProps = defaultProps

export default Range
