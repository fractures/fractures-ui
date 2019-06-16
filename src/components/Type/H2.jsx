import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
}

const H2 = styled.h2`
	margin-bottom: 0;
	margin-top: 0;

	font-size: 1.75rem;
	line-height: 2.1875rem;
`

H2.propTypes = propTypes

export default H2
