import classNames from '@sindresorhus/class-names'
import Label from '../shared/Label/Label'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const propTypes = {
	className: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string
}

const defaultProps = {
	onChange: () => null,
	onBlur: () => null,
	placeholder: '',
	type: 'text',
	value: ''
}

const NakedInput = props => {
	const isTextarea = props.type === 'textarea'
	const inputClasses = classNames('hl-input', {
		'hl-input--input': props.type !== 'textarea',
		'hl-input--textarea': props.type === 'textarea',
		'hl-btn-primary': props.type === 'primary'
	})

	const input = (
		<input
			placeholder={ props.placeholder }
			onBlur={ e => props.onBlur(e) }
			onChange={ e => props.onChange(e) }
			className={ inputClasses }
			type={ props.type }
			defaultValue={ props.value }
		/>
	)

	const textarea = (
		<textarea
			placeholder={ props.placeholder }
			rows={ 6 }
			onBlur={ e => props.onBlur(e) }
			onChange={ e => props.onChange(e) }
			className={ inputClasses }
			defaultValue={ props.value }
		/>
	)

	return (
		<div className={ props.className }>
			{props.label && (
				<label>
					<Label>{props.label}</Label>
				</label>
			)}
			{isTextarea ? textarea : input}
		</div>
	)
}

const Input = styled(NakedInput)`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;

	.hl-input {
		padding: 0 0.5rem;

		background-color: var(--color-gray-0);
		border: 1px solid var(--color-gray-500);
		border-radius: 0.125rem;
		color: var(--shade-6);
		outline: none;
		transition: box-shadow 100ms ease-in-out;

		font-size: 1rem;
	}

	.hl-input--input {
		line-height: 2.5rem;
	}

	.hl-input--textarea {
		padding: 0.5rem;

		line-height: 1.5rem;
		resize: vertical;
	}

	.hl-input:focus {
		box-shadow: 0 0 0 0.1875rem var(--color-gray-100);
	}

	.hl-input:active {
		border-color: var(--color-gray-700);
	}

	.hl-input:placeholder {
		color: var(--color-gray-300);
	}

	.hl-input::-webkit-input-placeholder {
		color: var(--color-gray-300);
	}
`

NakedInput.propTypes = propTypes
NakedInput.defaultProps = defaultProps

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
