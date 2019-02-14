import PropTypes from "prop-types"
import styled from "styled-components"

const propTypes = {
	className: PropTypes.string
}

const HR = styled.hr`
	margin-bottom: 0;
	margin-top: 0;

	border: 0;
	border-bottom: 1px solid var(--hl-300);
`

HR.propTypes = propTypes

export default HR
