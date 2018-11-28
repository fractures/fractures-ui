import PropTypes from "prop-types"
import styled from "styled-components"

const propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
}

const Code = styled.code`
	color: var(--fr-color-red);

	font-size: 1rem;
	font-family: var(--fr-font-mono);
	line-height: 1rem;
`

Code.propTypes = propTypes

export default Code
