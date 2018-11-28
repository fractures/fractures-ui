import PropTypes from "prop-types"
import styled from "styled-components"

const propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
}

const Small = styled.small`
	font-size: 0.75rem;
	line-height: 1.25rem;
`

Small.propTypes = propTypes

export default Small
