import { Component } from "react"
import cc from "classcat"

const defaultProps = {
	check: () => null,
	isChecked: false,
	isDisabled: false,
	label: ""
}

class Checkbox extends Component {
	render() {
		const checkboxClasses = cc({
			"fr-checkbox flex flex-gap-1 relative": true,
			"fr-checkbox--checked": this.props.isChecked,
			"fr-checkbox--unchecked": !this.props.isChecked,
			"fr-checkbox--disabled": this.props.isDisabled
		})

		return (
			<label className={ checkboxClasses }>
				<input
					type="checkbox"
					defaultChecked={ this.props.isChecked }
					onChange={ () => this.props.check() }
					className="h-0 w-0 none absolute"
				/>
				<span className="fr-checkbox__mark" />
				<span className="fr-checkbox__label nowrap ellipsis">{this.props.label}</span>
				<style jsx>{`
					.fr-checkbox {
						cursor: pointer;
						user-select: none;
					}

					.fr-checkbox__label {
						color: var(--shade-5);

						font-size: 0.875rem;
						font-weight: 500;
						line-height: 1.75rem;
					}

					.fr-checkbox__mark {
						height: 1.75rem;
						overflow: hidden;
						width: 1.75rem;

						background-color: var(--shade-0);
						border-radius: 0.125rem;
						border: 2px solid var(--shade-3);
						transition: border-color 120ms ease-in-out;
					}

					.fr-checkbox__mark:after {
						left: 0.625rem;
						top: 0.25rem;
						position: absolute;

						height: 1rem;
						opacity: 0;
						width: 0.5rem;

						border: solid var(--shade-0);
						border-width: 0 0.1875rem 0.1875rem 0;
						transform: rotate(45deg) translateY(-0.125rem) translateX(-0.125rem);
						transition: all 120ms ease-in-out;

						content: " ";
					}

					.fr-checkbox input:checked ~ .fr-checkbox__mark:after {
						opacity: 1;

						transform: rotate(45deg) translateY(0) translateX(0);
					}

					.fr-checkbox input:checked ~ .fr-checkbox__mark {
						background-color: var(--shade-2);
					}

					.fr-checkbox--disabled {
						opacity: 0.5;
						pointer-events: none;
					}
				`}</style>
			</label>
		)
	}
}

Checkbox.defaultProps = defaultProps

export default Checkbox
