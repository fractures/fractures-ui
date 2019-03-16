import PropTypes from "prop-types"
import styled from "styled-components"

const propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
}

const A = styled.a`
	color: var(--hl-500);
	font-weight: 700;

	&:hover {
		color: var(--hl-900);
	}
`

A.propTypes = propTypes

export default A
