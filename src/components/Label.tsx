import classNames from '@sindresorhus/class-names'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const propTypes = {
	color: PropTypes.oneOf(['primary', 'green', 'red', 'yellow', 'blue']),
	label: PropTypes.string.isRequired
}

const defaultProps = {
	color: null,
	label: ''
}

const NakedLabel = props => {
	const labelClass = classNames(props.className, {
		'hl-label--default': !props.color,
		[`hl-label--${ props.color }`]: props.color
	})

	return (
		<div className={ labelClass }>
			<span>{props.label}</span>
		</div>
	)
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
	white-space: nowrap;

	&:after {
		position: absolute;
		right: 0;
		top: 1.125rem;

		height: 0.375rem;
		width: 0.375rem;

		background-color: rgba(0, 0, 0, 0.2);
		background-blend-mode: multiply;
		border-top-left-radius: 0.125rem;
		content: ' ';
	}

	&.hl-label--default {
		background-color: var(--color-gray-100);
		color: var(--color-gray-700);
	}

	&.hl-label--primary {
		background-color: var(--color-gray-300);
		color: var(--color-gray-900);
	}

	&.hl-label--green {
		background-color: var(--color-green-500);
		color: var(--color-green-900);
	}

	&.hl-label--red {
		background-color: var(--color-red-500);
		color: var(--color-red-900);
	}

	&.hl-label--yellow {
		background-color: var(--color-yellow-500);
		color: var(--color-yellow-900);
	}

	&.hl-label--blue {
		background-color: var(--color-blue-500);
		color: var(--color-blue-900);
	}
`

NakedLabel.propTypes = propTypes
NakedLabel.defaultProps = defaultProps

Label.propTypes = propTypes
Label.defaultProps = defaultProps

export default Label
