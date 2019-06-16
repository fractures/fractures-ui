import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
}

const H0 = styled.h1`
	margin-bottom: 0;
	margin-top: 0;

	font-size: 8rem;
	line-height: 10rem;
`

H0.propTypes = propTypes

export default H0
