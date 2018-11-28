import PropTypes from "prop-types"
import styled from "styled-components"

const propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
}

const H5 = styled.h5`
	margin-bottom: 0;
	margin-top: 0;

	font-size: 1.125rem;
	line-height: 1.375rem;
`

H5.propTypes = propTypes

export default H5
