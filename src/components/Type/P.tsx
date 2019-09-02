import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
}

const P = styled.p`
	margin-bottom: 0;
	margin-top: 0;

	font-size: 1rem;
	line-height: 1.5rem;

	& > a {
		font-weight: 700;
		text-decoration: underline;
	}

	& > cite {
		background-color: var(--color-yellow-500);
	}
`

P.propTypes = propTypes

export default P
