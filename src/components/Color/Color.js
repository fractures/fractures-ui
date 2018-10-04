import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	hex: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
}

const NakedColor = props => (
	<div className={ props.className }>
		<div className="fr-color__box" style={ { backgroundColor: props.hex } } />
		<b className="fr-color__name">{props.name}</b>
		<small>{props.hex}</small>
	</div>
)

const Color = styled(NakedColor)`
	padding: 0.75rem;

	font-size: 0.9125rem;

	color: var(--fr-500);

	.fr-color__box {
		height: 2rem;
		margin-bottom: 0.5rem;
		width: 6rem;

		border-radius: 0.125rem;
	}

	.fr-color__name {
		line-height: 1.5;
	}

	b,
	small {
		display: block;
	}
`

NakedColor.propTypes = propTypes

Color.propTypes = propTypes

export default Color
