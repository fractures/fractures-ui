import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	hex: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
}

const NakedColor = props => (
	<small className="fr-color grow-1 p-2 nowrap white" style={ { backgroundColor: props.hex } }>
		<b>{props.name}</b>
		<br />
		<small>{props.hex}</small>
	</small>
)

const Color = styled(NakedColor)`
	text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
`

NakedColor.propTypes = propTypes

Color.propTypes = propTypes

export default Color
