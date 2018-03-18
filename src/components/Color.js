import PropTypes from "prop-types"
import React from "react"

const propTypes = {
	hex: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
}

const Color = props => (
	<small className="fr-color grow-1 p-2 nowrap white" style={ { backgroundColor: props.hex } }>
		<b>{props.name}</b>
		<br />
		<small>{props.hex}</small>
		<style jsx>{`
			.fr-color {
				text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
			}
		`}</style>
	</small>
)

Color.propTypes = propTypes

export default Color
