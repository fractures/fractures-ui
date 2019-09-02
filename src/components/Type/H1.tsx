import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
}

const H1 = styled.h1`
	margin-bottom: 0;
	margin-top: 0;

	font-size: 2.25rem;
	line-height: 2.8125rem;
`

H1.propTypes = propTypes

export default H1
