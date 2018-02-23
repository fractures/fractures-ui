import React, { Component, Fragment } from "react"

const defaultProps = {
	max: 100,
	value: 0
}

class Progress extends Component {
	render() {
		return (
			<Fragment>
				<progress className="fr-progress radius-max w-100" max={ this.props.max } value={ this.props.value } />
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
	}
}

Progress.defaultProps = defaultProps

export default Progress
