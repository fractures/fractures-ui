import { Component } from "react"
import cc from "classcat"

const defaultProps = {
	isActive: false,
	type: "primary",
	value: ""
}

class Button extends Component {
	render() {
		const buttonClasses = cc({
			btn: true,
			"btn-primary": this.props.type === "primary",
			"btn-secondary": this.props.type === "secondary",
			"btn--small": this.props.small,
			"btn--disabled": this.props.disabled,
			"btn--active": this.props.isActive
		})

		return (
			<div className="flex flex-ycenter">
				<input className={ buttonClasses } type="button" value={ this.props.value } />
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
						background-color: var(--shade-3);
						border: 1px solid var(--shade-3);
						color: white;
					}

					.btn-primary:not(.btn--active):hover {
						background-color: var(--shade-6);
						border-color: var(--shade-6);
					}

					.btn-primary.btn--active {
						background-color: var(--shade-6);
						border-color: var(--shade-6);
						color: var(--shade-0);
					}

					.btn-secondary {
						border: 1px solid var(--shade-3);
						color: var(--shade-4);
					}

					.btn-secondary:not(.btn--active):hover {
						background-color: var(--shade-0);
						border-color: var(--shade-3);
						color: var(--shade-4);
					}

					.btn-secondary.btn--active {
						background-color: var(--shade-0);
						border-color: var(--shade-2);
						color: var(--shade-5);
					}

					.btn--disabled {
						opacity: 0.6;

						border-color: transparent;

						pointer-events: none;
					}

					.btn:focus:not(.btn--disabled):not(.btn--loading) {
						box-shadow: 0 0 0 0.15rem var(--shade-1);
					}
				`}</style>
			</div>
		)
	}
}

Button.defaultProps = defaultProps

export default Button
