import PropTypes from "prop-types"
import React, { Fragment } from "react"

const propTypes = {
	max: PropTypes.number,
	value: PropTypes.number.isRequired
}

const defaultProps = {
	max: 100,
	value: 0
}

const Progress = props => (
	<Fragment>
		<progress className="fr-progress radius-max w-100" max={ props.max } value={ props.value } />
		<style jsx global>{`
			.fr-progress {
				height: 0.5rem;

				background-color: var(--fr-100);
				border: 0;
			}

			.fr-progress::-webkit-progress-bar {
				background-color: transparent;
			}

			.fr-progress::-webkit-progress-value {
				background-color: var(--fr-500);
				border-radius: 1rem;
			}
		`}</style>
	</Fragment>
)

Progress.propTypes = propTypes
Progress.defaultProps = defaultProps

export default Progress
