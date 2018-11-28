import PropTypes from "prop-types"
import styled from "styled-components"

const propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
}

const H3 = styled.h3`
	margin-bottom: 0;
	margin-top: 0;

	font-size: 1.5rem;
	line-height: 1.875rem;
`

H3.propTypes = propTypes

export default H3
