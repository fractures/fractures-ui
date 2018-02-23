import React, { Component, Fragment } from "react"

const defaultProps = {
	set: () => null,
	value: 0
}

class Range extends Component {
	render() {
		return (
			<Fragment>
				<input
					type="range"
					className="fr-range w-100"
					defaultValue={ this.props.value }
					onChange={ e => this.props.set(e.target.value) }
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

						background: var(--fr-700);
						cursor: pointer;
						transform: translateY(-0.375rem);
						-webkit-appearance: none;
					}

					.fr-range:focus::-webkit-slider-thumb {
						box-shadow: 0 0 0 0.15rem var(--fr-300);
					}
				`}</style>
			</Fragment>
		)
	}
}

Range.defaultProps = defaultProps

export default Range
