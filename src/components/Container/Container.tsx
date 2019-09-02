import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
	breakPoint: PropTypes.number,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	width: PropTypes.number
}

const defaultProps = {
	breakPoint: 1060 + 48,
	width: 1060
}

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: 100%;

	width: ${ props => props.width }px;

	@media screen and (max-width: ${ props => props.breakPoint }px) {
		margin-left: 1.5rem !important;
		margin-right: 1.5rem !important;
		max-width: calc(100% - 3rem) !important;
	}
`

Container.propTypes = propTypes
Container.defaultProps = defaultProps

export default Container
