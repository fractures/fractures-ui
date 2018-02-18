import React, { Component } from "react"
import cc from "classcat"

const defaultProps = {
	change: () => null,
	placeholder: "",
	type: "text",
	value: ""
}

class Input extends Component {
	render() {
		const isTextarea = this.props.type === "textarea"
		const inputClasses = cc({
			"fr-input": true,
			"fr-input--input px-1": this.props.type !== "textarea",
			"fr-input--textarea p-1": this.props.type === "textarea",
			"fr-btn-primary": this.props.type === "primary"
		})

		const input = (
			<input
				placeholder={ this.props.placeholder }
				onChange={ e => this.props.change(e.target.value) }
				className={ inputClasses }
				type={ this.props.type }
				defaultValue={ this.props.value }
			/>
		)

		const textarea = (
			<textarea
				placeholder={ this.props.placeholder }
				rows={ 6 }
				onChange={ e => this.props.change(e.target.value) }
				className={ inputClasses }
				defaultValue={ this.props.value }
			/>
		)

		return (
			<div className="flex flex-column">
				{this.props.label && <label className="fr-input__label">{this.props.label}</label>}
				{isTextarea ? textarea : input}
				<style jsx global>{`
					.fr-input {
						background-color: var(--shade-0);
						border: 1px solid var(--shade-3);
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
						box-shadow: 0 0 0 0.15rem var(--shade-2);
					}

					.fr-input:active {
						border-color: var(--shade-4);
					}

					.fr-input:placeholder {
						color: var(--shade-3);
					}

					.fr-input::-webkit-input-placeholder {
						color: var(--shade-3);
					}

					.fr-input__label {
						color: var(--shade-5);

						font-size: 0.875rem;
						font-weight: 500;
						line-height: 1.75rem;
					}
				`}</style>
			</div>
		)
	}
}

Input.defaultProps = defaultProps

export default Input
