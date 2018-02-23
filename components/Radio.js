import cc from "classcat"
import Label from "./shared/Label"
import React, { Component } from "react"

const defaultProps = {
	isDisabled: false,
	label: "",
	set: () => null,
	state: null,
	value: null
}

class Radio extends Component {
	render() {
		const radioClasses = cc({
			"fr-radio flex flex-gap-1 relative": true,
			"fr-radio--disabled": this.props.isDisabled
		})

		return (
			<label className={ radioClasses }>
				<input
					type="radio"
					name="radio"
					className="h-0 w-0 none absolute"
					onChange={ () => this.props.set(this.props.value) }
					defaultChecked={ this.props.state === this.props.value }
				/>
				<span className="fr-radio__checkmark radius-max" />
				<Label>{this.props.label}</Label>
				<style jsx global>{`
					.fr-radio {
						cursor: pointer;
						user-select: none;
					}

					.fr-radio__checkmark {
						height: 1.5rem;
						width: 1.5rem;

						background-color: var(--fr-ground);
						border: 2px solid var(--fr-900);
					}

					.fr-radio input:checked ~ .fr-radio__checkmark {
						background-color: var(--fr-ground);
					}

					.fr-radio__checkmark:after {
						position: absolute;
						top: 0.3125rem;
						left: 0.3125rem;

						opacity: 0;
						height: 0.875rem;
						width: 0.875rem;

						border-radius: 100%;
						background: var(--fr-900);
						transform: scale(0);
						transition: all 120ms ease-in-out;

						content: "";
					}

					.fr-radio input:checked ~ .fr-radio__checkmark:after {
						opacity: 1;

						transform: scale(1);
					}

					.fr-radio--disabled {
						opacity: 0.5;
						pointer-events: none;
					}
				`}</style>
			</label>
		)
	}
}

Radio.defaultProps = defaultProps

export default Radio
