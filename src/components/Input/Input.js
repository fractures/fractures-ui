import classNames from "@sindresorhus/class-names"
import Label from "../shared/Label/Label"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	className: PropTypes.string,
	change: PropTypes.func.isRequired,
	label: PropTypes.string,
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
	const inputClasses = classNames("fr-input", {
		"fr-input--input": props.type !== "textarea",
		"fr-input--textarea": props.type === "textarea",
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

		background-color: var(--fr-ground);
		border: 1px solid var(--fr-500);
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
		box-shadow: 0 0 0 0.1875rem var(--fr-focus);
	}

	.hl-input:active {
		border-color: var(--fr-700);
	}

	.hl-input:placeholder {
		color: var(--fr-300);
	}

	.hl-input::-webkit-input-placeholder {
		color: var(--fr-300);
	}
`

NakedInput.propTypes = propTypes
NakedInput.defaultProps = defaultProps

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
