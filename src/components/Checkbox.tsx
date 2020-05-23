import classNames from '@sindresorhus/class-names'
import Label from './SharedLabel'
import React from 'react'
import styled from 'styled-components'

const defaultProps = {
	onChange: () => null,
	isChecked: false,
	isDisabled: false,
	label: ''
}

const NakedCheckbox = props => {
	const checkboxClasses = classNames('hl-checkbox', {
		'hl-checkbox--checked': props.isChecked,
		'hl-checkbox--unchecked': !props.isChecked,
		'hl-checkbox--disabled': props.isDisabled
	})

	return (
		<div className={ props.className }>
			<label className={ checkboxClasses }>
				<input type="checkbox" defaultChecked={ props.isChecked } onChange={ () => props.onChange() } />
				<span className="hl-checkbox__mark" />
				<Label>{props.label}</Label>
			</label>
		</div>
	)
}

NakedCheckbox.defaultProps = defaultProps

const Checkbox = styled(NakedCheckbox)`
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

	.hl-checkbox {
		position: relative;

		display: flex;
	}

	.hl-checkbox__mark {
		display: flex;
		height: 1.5rem;
		margin-right: 0.5rem;
		overflow: hidden;
		min-width: 1.5rem;
		width: 1.5rem;

		background-color: var(--color-gray-0);
		border-radius: 0.125rem;
		border: 2px solid var(--color-gray-500);
		transition: border-color 100ms ease-in-out;
	}

	.hl-checkbox__mark:after {
		left: 0.625rem;
		top: 0.25rem;
		position: absolute;

		box-sizing: inherit;
		height: 0.875rem;
		opacity: 0;
		width: 0.375rem;

		border: solid var(--color-gray-500);
		border-width: 0 0.1875rem 0.1875rem 0;
		transform: rotate(45deg) translateY(-0.125rem) translateX(-0.125rem);
		transition: all 100ms ease-in-out;
		content: ' ';
	}

	.hl-checkbox--disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	input:checked ~ .hl-checkbox__mark:after {
		opacity: 1;
		transform: rotate(45deg) translateY(0) translateX(0);
	}

	input:checked ~ .hl-checkbox__mark {
		background-color: var(--color-gray-0);
	}
`

export default Checkbox
