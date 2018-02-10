import { Component } from "react"
import cc from "classcat"

const defaultProps = {
	check: () => null,
	label: "",
	isChecked: false,
	isDisabled: false
}

class Checkbox extends Component {
	render() {

		// TODO Lets make this true unique
		const checkboxId = `checkbox-${ Math.floor(Math.random() * Math.floor(99999999)) }`
		const checkboxClasses = cc({
			"fr-checkbox flex flex-gap-1": true,
			"fr-checkbox--checked": this.props.isChecked,
			"fr-checkbox--unchecked": !this.props.isChecked,
			"fr-checkbox--disabled": this.props.isDisabled
		})

		return (
			<div className={ checkboxClasses }>
				<div className="fr-checkbox__display relative">
					<input
						type="checkbox"
						className="absolute h-0 w-0 none"
						defaultChecked={ this.props.isChecked }
						id={ checkboxId }
						onChange={ () => this.props.check() }
					/>
					<label className="fr-checkbox-label" htmlFor={ checkboxId } />
				</div>
				<label className="fr-checkbox__label" htmlFor={ checkboxId }>
					{this.props.label}
				</label>
				<style jsx>{`
					.fr-checkbox {
						height: 2rem;

						user-select: none;
					}

					.fr-checkbox__display {
						height: 2rem;
						width: 2rem;

						background-color: var(--shade-0);
						box-shadow: inset 0 0 0 2px var(--shade-3);
						border-radius: 0.25rem;
					}

					.fr-checkbox--checked .fr-checkbox__display {
						background-color: var(--shade-3);
					}

					.fr-checkbox--unchecked .fr-checkbox__display {
						background-color: var(--shade-0);
					}

					.fr-checkbox--disabled {
						pointer-events: none;
						opacity: 0.5;
					}

					.fr-checkbox__label {
						color: var(--shade-4);
						cursor: pointer;

						font-size: 0.875rem;
						font-weight: 500;
						line-height: 2rem;
					}

					.fr-checkbox-label:after {
						position: absolute;
						top: 0.375rem;
						left: 0.375rem;

						height: 1.25rem;
						width: 1.25rem;

						background-color: white;
						border-radius: 6rem;
						transform: scale(0);
						transition: 160ms;
						content: "";
					}

					.fr-checkbox input:checked + label {
						background: var(--shade-3);
					}

					.fr-checkbox input:checked + label:after {
						transform: scale(1);
					}
				`}</style>
			</div>
		)
	}
}

Checkbox.defaultProps = defaultProps

export default Checkbox
