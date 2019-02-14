import PropTypes from "prop-types"
import styled from "styled-components"

const propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	isSmall: PropTypes.bool
}

const defaultProps = {
	isSmall: false
}

const Code = styled.code`
	color: var(--hl-700);

	font-size: ${ props => (props.isSmall ? "0.75rem" : "1rem;") };
	font-family: var(--hl-font-mono);
	line-height: 1rem;
`

Code.propTypes = propTypes
Code.defaultProps = defaultProps

export default Code
