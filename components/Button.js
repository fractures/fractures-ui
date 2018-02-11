import { Component } from "react"
import cc from "classcat"

const defaultProps = {
	action: () => null,
	isActive: false,
	isRounded: false,
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
			"btn--active": this.props.isActive,
			"btn--radius": !this.props.isRounded,
			"radius-max": this.props.isRounded
		})

		return (
			<div className="flex flex-ycenter" onClick={ () => this.props.action() }>
				<input className={ buttonClasses } type="button" value={ this.props.value } />
				<style jsx global>{`
					.btn {
						display: inline-block;
						padding: 0.25rem 1rem;

						border: 0;
						outline: none;

						font-size: 0.875rem;
						font-weight: 500;
						line-height: 2rem;
						cursor: pointer;

						transition: background-color 100ms ease-in-out, box-shadow 100ms ease-in-out;
					}

					.btn-primary {
						background-color: var(--shade-4);
						border: 1px solid var(--shade-4);
						color: var(--shade-0);
					}

					.btn-primary:not(.btn--active):hover {
						background-color: var(--shade-6);
						border-color: var(--shade-6);
					}

					.btn.btn-primary.btn--active,
					.btn.btn-primary:active {
						background-color: var(--shade-7);
						border-color: var(--shade-7);
						color: var(--shade-1);
					}

					.btn-secondary {
						background-color: var(--shade-0);
						border: 1px solid var(--shade-4);
						color: var(--shade-4);
					}

					.btn-secondary:not(.btn--active):hover {
						background-color: var(--shade-1);
						border-color: var(--shade-3);
						color: var(--shade-5);
					}

					.btn.btn-secondary.btn--active,
					.btn.btn-secondary:active {
						background-color: var(--shade-1);
						border-color: var(--shade-4);
						color: var(--shade-6);
					}

					.btn--radius {
						border-radius: 0.25rem;
					}

					.btn.btn--small {
						padding: 0.125rem 0.5rem;

						font-size: 0.75rem;
						line-height: 1.5rem;
					}

					.btn--disabled {
						opacity: 0.6;

						border-color: transparent;

						pointer-events: none;
					}

					.btn:focus:not(.btn--disabled):not(.btn--loading) {
						box-shadow: 0 0 0 0.15rem var(--shade-2);
					}
				`}</style>
			</div>
		)
	}
}

Button.defaultProps = defaultProps

export default Button
