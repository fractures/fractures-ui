import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	max: PropTypes.number,
	value: PropTypes.number.isRequired
}

const defaultProps = {
	max: 100,
	value: 0
}

const NakedProgress = props => <progress className={ `${ props.className } radius-max w-100` } max={ props.max } value={ props.value } />

const Progress = styled(NakedProgress)`
	height: 0.5rem;

	background-color: var(--fr-100);
	border: 0;

	&::-webkit-progress-bar {
		background-color: transparent;
	}

	&::-webkit-progress-value {
		background-color: var(--fr-500);
		border-radius: 1rem;
	}
`

NakedProgress.propTypes = propTypes
NakedProgress.defaultProps = defaultProps

Progress.propTypes = propTypes
Progress.defaultProps = defaultProps

export { Progress, NakedProgress }
