import {Component} from "react"
import cc from "classcat"

const defaultProps = {
	type: "primary",
	value: ""
}

class Button extends Component {
	render() {
		const buttonClasses = cc({
			btn: true,
			"btn--small": this.props.small,
			"btn-primary": this.props.type === "primary",
			"btn-secondary": this.props.type === "secondary",
			"btn--disabled": this.props.disabled
		})

		return (
			<div className="flex flex-ycenter">
				<input className={buttonClasses} type="button" value={this.props.value} />
				<style jsx global>{`
					.btn {
						display: inline-block;
						padding: 0.25rem 1rem;

						border: 0;
						border-radius: 0.25rem;
						outline: none;

						font-size: 0.875rem;
						font-weight: 500;
						line-height: 2rem;
						cursor: pointer;

						transition: box-shadow 100ms ease-in-out;
					}

					.btn.btn--small {
						padding: 0.125rem 0.5rem;

						font-size: 0.75rem;
						line-height: 1.5rem;
					}

					.btn-primary {
						background-color: var(--color-blue-3);
						border: 1px solid var(--color-blue-3);
						color: white;
					}

					.btn-primary:hover {
						background-color: var(--color-blue-6);
						border-color: var(--color-blue-6);
					}

					.btn-secondary {
						border: 1px solid var(--color-blue-3);
						color: var(--color-blue-4);
					}

					.btn-secondary:hover {
						background-color: var(--color-blue-0);
						border-color: var(--color-blue-3);
						color: var(--color-blue-4);
					}

					.btn--disabled {
						background-color: var(--color-blue-2);
						border-color: var(--color-blue-2);
						color: var(--color-blue-1);

						pointer-events: none;
					}

					.btn:focus:not(.btn--disabled):not(.btn--loading) {
						box-shadow: 0 0 0 0.15rem var(--color-blue-1);
					}
				`}</style>
			</div>
		)
	}
}

Button.defaultProps = defaultProps

export default Button
