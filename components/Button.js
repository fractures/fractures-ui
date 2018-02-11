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
			"fr-btn": true,
			"fr-btn-primary": this.props.type === "primary",
			"fr-btn-secondary": this.props.type === "secondary",
			"fr-btn--small": this.props.small,
			"fr-btn--disabled": this.props.disabled,
			"fr-btn--active": this.props.isActive,
			"fr-btn--radius": !this.props.isRounded,
			"radius-max": this.props.isRounded
		})

		return (
			<div className="flex flex-ycenter" onClick={ () => this.props.action() }>
				<input className={ buttonClasses } type="button" value={ this.props.value } />
				<style jsx global>{`
					.fr-btn {
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

					.fr-btn-primary {
						background-color: var(--shade-4);
						border: 1px solid var(--shade-4);
						color: var(--shade-0);
					}

					.fr-btn-primary:not(.fr-btn--active):hover {
						background-color: var(--shade-6);
						border-color: var(--shade-6);
					}

					.fr-btn.fr-btn-primary.fr-btn--active,
					.fr-btn.fr-btn-primary:active {
						background-color: var(--shade-7);
						border-color: var(--shade-7);
						color: var(--shade-1);
					}

					.fr-btn-secondary {
						background-color: var(--shade-0);
						border: 1px solid var(--shade-4);
						color: var(--shade-4);
					}

					.fr-btn-secondary:not(.fr-btn--active):hover {
						background-color: var(--shade-1);
						border-color: var(--shade-3);
						color: var(--shade-5);
					}

					.fr-btn.fr-btn-secondary.fr-btn--active,
					.fr-btn.fr-btn-secondary:active {
						background-color: var(--shade-1);
						border-color: var(--shade-4);
						color: var(--shade-6);
					}

					.fr-btn--radius {
						border-radius: 0.25rem;
					}

					.fr-btn.fr-btn--small {
						padding: 0.125rem 0.5rem;

						font-size: 0.75rem;
						line-height: 1.5rem;
					}

					.fr-btn--disabled {
						opacity: 0.6;

						border-color: transparent;

						pointer-events: none;
					}

					.fr-btn:focus:not(.fr-btn--disabled):not(.fr-btn--loading) {
						box-shadow: 0 0 0 0.15rem var(--shade-2);
					}
				`}</style>
			</div>
		)
	}
}

Button.defaultProps = defaultProps

export default Button
