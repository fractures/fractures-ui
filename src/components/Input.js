import cc from "classcat"
import Label from "./shared/Label"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	change: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string
}

const defaultProps = {
	change: () => null,
	placeholder: "",
	type: "text",
	value: ""
}

const NakedInput = props => {
	const isTextarea = props.type === "textarea"
	const inputClasses = cc({
		"fr-input": true,
		"fr-input--input px-1": props.type !== "textarea",
		"fr-input--textarea p-1": props.type === "textarea",
		"fr-btn-primary": props.type === "primary"
	})

	const input = (
		<input
			placeholder={ props.placeholder }
			onChange={ e => props.change(e.target.value) }
			className={ inputClasses }
			type={ props.type }
			defaultValue={ props.value }
		/>
	)

	const textarea = (
		<textarea
			placeholder={ props.placeholder }
			rows={ 6 }
			onChange={ e => props.change(e.target.value) }
			className={ inputClasses }
			defaultValue={ props.value }
		/>
	)

	return (
		<div className={ `${ props.className } flex flex-column` }>
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
	.fr-input {
		background-color: var(--fr-ground);
		border: 1px solid var(--fr-500);
		border-radius: 0.125rem;
		color: var(--shade-6);
		outline: none;
		transition: box-shadow 100ms ease-in-out;
		
		font-size: 1rem;
	}
	
	.fr-input--input {
		line-height: 2.5rem;
	}
	
	.fr-input--textarea {
		line-height: 1.5rem;
		resize: vertical;
	}
	
	.fr-input:focus {
		box-shadow: 0 0 0 0.1875rem var(--fr-focus);
	}
	
	.fr-input:active {
		border-color: var(--fr-700);
	}
	
	.fr-input:placeholder {
		color: var(--fr-300);
	}
	
	.fr-input::-webkit-input-placeholder {
		color: var(--fr-300);
	}
`

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
