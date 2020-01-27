import classNames from '@sindresorhus/class-names'
import Label from './SharedLabel'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const propTypes = {
	onChange: PropTypes.func.isRequired,
	className: PropTypes.string,
	isChecked: PropTypes.bool,
	isDisabled: PropTypes.bool,
	label: PropTypes.string.isRequired
}

const defaultProps = {
	onChange: () => null,
	isChecked: false,
	isDisabled: false,
	label: ''
}

const NakedToggle = props => {
	const checkboxClasses = classNames('hl-toggle', {
		'hl-toggle--checked': props.isChecked,
		'hl-toggle--unchecked': !props.isChecked,
		'hl-toggle--disabled': props.isDisabled
	})

	return (
		<div className={ props.className }>
			<label className={ checkboxClasses }>
				<input type="checkbox" defaultChecked={ props.isChecked } onChange={ e => props.onChange(e) } />
				<span className="hl-toggle__mark" />
				<Label>{props.label}</Label>
			</label>
		</div>
	)
}

const Toggle = styled(NakedToggle)`
	box-sizing: border-box;

	user-select: none;

	label {
		cursor: pointer;
	}

	input {
		display: none;
		height: 0;
		width: 0;

		visibility: none;
	}

	.hl-toggle {
		position: relative;

		display: flex;
	}

	.hl-toggle--disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.hl-toggle__mark {
		box-sizing: border-box;
		height: 1.5rem;
		margin-right: 0.5rem;
		overflow: hidden;
		width: 3rem;

		background-color: var(--color-gray-500);
		border-radius: 3rem;
	}

	.hl-toggle__mark:after {
		left: 0.25rem;
		top: 0.25rem;
		position: absolute;

		box-sizing: inherit;
		height: 1rem;
		width: 1rem;

		background-color: var(--color-gray-0);
		border-radius: 100%;
		transition: all 100ms ease-in-out;
		content: ' ';
	}

	.hl-toggle__mark:before {
		left: 0;
		top: 0;
		position: absolute;

		box-sizing: inherit;
		padding: 0 0.5rem;
		width: 3rem;

		color: var(--color-gray-0);

		content: 'Off';
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1.5rem;
		text-align: right;
	}

	input:checked ~ .hl-toggle__mark:after {
		left: 1.75rem;
	}

	input:checked ~ .hl-toggle__mark:before {
		content: 'On';
		text-align: left;
	}

	input:checked ~ .hl-toggle__mark {
		background-color: var(--color-gray-900);
	}
`

NakedToggle.propTypes = propTypes
NakedToggle.defaultProps = defaultProps

Toggle.propTypes = propTypes
Toggle.defaultProps = defaultProps

export default Toggle
