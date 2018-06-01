import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}

const NakedLabel = ({ children }) => <span className="fr-label nowrap ellipsis">{children}</span>

const Label = styled(NakedLabel)`
	color: var(--fr-900);

	font-size: 0.875rem;
	font-weight: 500;
	line-height: 1.75rem;
`

Label.propTypes = propTypes

export default Label
