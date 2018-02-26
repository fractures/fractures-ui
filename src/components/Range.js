import React, { Fragment } from "react"
import PropTypes from "prop-types"

const propTypes = {
	set: PropTypes.func.isRequired,
	value: PropTypes.number
}

const defaultProps = {
	set: () => null,
	value: 0
}

const Range = props => (
	<Fragment>
		<input
			type="range"
			className="fr-range w-100"
			defaultValue={ props.value }
			onChange={ e => props.set(e.target.value) }
		/>
		<style jsx global>{`
			.fr-range {
				-webkit-appearance: none;

				background-color: transparent;
			}

			.fr-range:focus {
				outline: none;
			}

			.fr-range::-webkit-slider-runnable-track {
				height: 0.5rem;
				width: 100%;

				background-color: var(--fr-100);
				border-radius: 1rem;

				cursor: pointer;
			}

			.fr-range::-webkit-slider-thumb {
				height: 1.125rem;
				width: 1.125rem;

				border-radius: 1rem;
				border: 0;

				background: var(--fr-500);
				cursor: pointer;
				transform: translateY(-0.375rem);
				-webkit-appearance: none;
			}

			.fr-range:focus::-webkit-slider-thumb {
				box-shadow: 0 0 0 0.1875rem var(--fr-focus);
			}
		`}</style>
	</Fragment>
)

Range.propTypes = propTypes
Range.defaultProps = defaultProps

export default Range
