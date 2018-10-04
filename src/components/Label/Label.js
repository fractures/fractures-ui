import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	className: PropTypes.string
}

const NakedLabel = ({ children, className }) => <span className={ className }>{children}</span>

const Label = styled(NakedLabel)`
	display: flex;
	white-space: nowrap;

	color: var(--fr-900);

	font-size: 0.875rem;
	font-weight: 500;
	line-height: 1.75rem;
	text-overflow: ellipsis;
`

NakedLabel.propTypes = propTypes

Label.propTypes = propTypes

export default Label
