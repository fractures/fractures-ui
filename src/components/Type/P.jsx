import PropTypes from "prop-types"
import styled from "styled-components"

const propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
}

const P = styled.p`
	font-size: 1rem;
	line-height: 1.375rem;

	& > a {
		font-weight: 700;
		text-decoration: underline;
	}

	& > cite {
		background-color: var(--color-yellow);
	}
`

P.propTypes = propTypes

export default P
