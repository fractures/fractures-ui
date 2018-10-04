import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	className: PropTypes.string,
	max: PropTypes.number,
	value: PropTypes.number.isRequired
}

const defaultProps = {
	max: 100,
	value: 0
}

const NakedProgress = props => <progress className={ props.className } max={ props.max } value={ props.value } />

const Progress = styled(NakedProgress)`
	height: 0.5rem;
	width: 100%;

	background-color: var(--fr-100);
	border: 0;
	border-radius: 10rem;

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
