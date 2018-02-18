import React, { Fragment } from "react"

const Label = props => (
	<Fragment>
		<span className="fr-label nowrap ellipsis">{props.children}</span>
		<style jsx global>{`
			.fr-label {
				color: var(--shade-5);

				font-size: 0.875rem;
				font-weight: 500;
				line-height: 1.75rem;
			}
		`}</style>
	</Fragment>
)

export default Label
