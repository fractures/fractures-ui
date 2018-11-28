import classNames from "@sindresorhus/class-names"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	color: PropTypes.string,
	label: PropTypes.string.isRequired
}

const defaultProps = {
	color: "green",
	label: ""
}

const NakedLabel = props => {
	const labelClass = classNames(props.className, {
		[`fr-label--${ props.color }`]: props.color
	})

	return <div className={ labelClass }>{props.label}</div>
}

const Label = styled(NakedLabel)`
	position: relative;

	display: inline-flex;
	height: 1.5rem;
	padding: 0 0.5rem;

	border-radius: 0.125rem;
	clip-path: polygon(100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 0);

	font-size: 0.75rem;
	font-weight: 500;
	line-height: 1.5rem;

	&:after {
		position: absolute;
		right: 0;
		top: 1.125rem;

		height: 0.375rem;
		width: 0.375rem;

		background-color: rgba(0, 0, 0, 0.2);
		background-blend-mode: multiply;
		border-top-left-radius: 0.125rem;
		content: " ";
	}

	&.fr-label--green {
		background-color: var(--fr-color-green);
		color: var(--fr-ground);
	}

	&.fr-label--red {
		background-color: var(--fr-color-red);
		color: var(--fr-ground);
	}

	&.fr-label--yellow {
		background-color: var(--fr-color-yellow);
		color: var(--fr-ground);
	}
`

NakedLabel.propTypes = propTypes
NakedLabel.defaultProps = defaultProps

Label.propTypes = propTypes
Label.defaultProps = defaultProps

export default Label
