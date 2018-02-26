import React, { Fragment } from "react"
import PropTypes from "prop-types"

const propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}

const Label = props => (
	<Fragment>
		<span className="fr-label nowrap ellipsis">{props.children}</span>
		<style jsx global>{`
			.fr-label {
				color: var(--fr-900);

				font-size: 0.875rem;
				font-weight: 500;
				line-height: 1.75rem;
			}
		`}</style>
	</Fragment>
)

Label.propTypes = propTypes

export default Label
