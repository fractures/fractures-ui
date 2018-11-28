import PropTypes from "prop-types"
import styled from "styled-components"

const propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
}

const H4 = styled.h4`
	margin-bottom: 0;
	margin-top: 0;

	font-size: 1.25rem;
	line-height: 1.5625rem;
`

H4.propTypes = propTypes

export default H4
