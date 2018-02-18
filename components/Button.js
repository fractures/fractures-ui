import React, { Component } from "react"
import cc from "classcat"

const defaultProps = {
	action: () => null,
	isActive: false,
	isLoading: false,
	isRounded: false,
	type: "primary",
	value: ""
}

const IconLoading = props => (
	<svg xmlns="http://www.w3.org/2000/svg" className="fr-btn__loading">
		<circle fill="none" strokeWidth={ 4 } stroke="var(--shade-2)" cx="12" cy="12" r="10" style={ { opacity: 0.25 } } />
		<circle
			fill="none"
			strokeWidth={ 4 }
			stroke={ props.color || "var(--shade-1)" }
			strokeDasharray="32"
			strokeLinecap="round"
			cx="12"
			cy="12"
			r="10"
		/>
	</svg>
)

class Button extends Component {
	render() {
		const buttonClasses = cc({
			"fr-btn": true,
			"fr-btn-primary": this.props.type === "primary",
			"fr-btn-secondary": this.props.type === "secondary",
			"fr-btn--small": this.props.small,
			"fr-btn--disabled": this.props.disabled,
			"fr-btn--loading": this.props.isLoading,
			"fr-btn--active": this.props.isActive,
			"fr-btn--radius": !this.props.isRounded,
			"radius-max": this.props.isRounded
		})

		return (
			<div className="inline-flex flex-ycenter relative" onClick={ () => this.props.action() }>
				<input className={ buttonClasses } type="button" value={ this.props.value } />
				{this.props.isLoading && <IconLoading color={ this.props.type === "secondary" && "var(--shade-4)" } />}
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

						transition: background-color 100ms ease-in-out, box-shadow 100ms ease-in-out,
							padding-left 180ms ease-in-out;
					}

					/* Primary */
					.fr-btn-primary {
						background-color: var(--shade-4);
						color: var(--shade-0);
					}

					.fr-btn-primary:not(.fr-btn--active):not(.fr-btn--loading):hover {
						background-color: var(--shade-6);
					}

					.fr-btn.fr-btn-primary.fr-btn--active,
					.fr-btn.fr-btn-primary:active {
						background-color: var(--shade-7);
						color: var(--shade-1);
					}

					.fr-btn-primary.fr-btn--loading {
						color: var(--shade-2);
					}

					.fr-btn-primary.fr-btn--disabled {
						background-color: var(--shade-1);
						color: var(--shade-2);
					}

					/* Secondary */
					.fr-btn-secondary {
						background-color: var(--shade-0);
						box-shadow: inset 0 0 0 1px var(--shade-4);
						color: var(--shade-4);
					}

					.fr-btn-secondary:not(.fr-btn--active):not(.fr-btn--loading):hover {
						background-color: var(--shade-1);
						box-shadow: inset 0 0 0 1px var(--shade-3);
						color: var(--shade-5);
					}

					.fr-btn.fr-btn-secondary.fr-btn--active,
					.fr-btn.fr-btn-secondary:active {
						background-color: var(--shade-1);
						box-shadow: inset 0 0 0 1px var(--shade-4);
						color: var(--shade-6);
					}

					.fr-btn-secondary.fr-btn--loading {
						color: var(--shade-3);
					}

					.fr-btn-secondary.fr-btn--disabled {
						box-shadow: inset 0 0 0 1px var(--shade-3);
						color: var(--shade-2);
					}

					/* Default radius */
					.fr-btn--radius {
						border-radius: 0.25rem;
					}

					/* Small */
					.fr-btn.fr-btn--small {
						padding: 0.125rem 0.5rem;

						font-size: 0.75rem;
						line-height: 1.5rem;
					}

					/* Disabled */
					.fr-btn--disabled {
						pointer-events: none;
					}

					/* Loading */
					.fr-btn--loading {
						padding-left: 2.5rem;

						pointer-events: none;
					}

					.fr-btn--small.fr-btn--loading {
						padding-left: 2rem;
					}

					.fr-btn--small + .fr-btn__loading {
						left: 0.125rem;
					}

					.fr-btn__loading {
						position: absolute;
						left: 0.5rem;
						top: 0.5rem;
						z-index: 1;

						height: 1.5rem;
						width: 1.5rem;

						animation: fr-button-show 180ms ease-in-out;
					}

					.fr-btn__loading circle {
						animation: fr-button-dash 480ms linear forwards infinite;
					}

					@keyframes fr-button-show {
						0% {
							opacity: 0;
						}
						100% {
							opacity: 1;
						}
					}

					@keyframes fr-button-dash {
						from {
							stroke-dashoffset: 0;
						}
						to {
							stroke-dashoffset: 64;
						}
					}

					/* Focus */
					.fr-btn:focus:not(.fr-btn--disabled):not(.fr-btn--loading) {
						box-shadow: 0 0 0 0.15rem var(--shade-2);
					}

					.fr-btn.fr-btn-secondary:focus:not(.fr-btn--disabled):not(.fr-btn--loading) {
						box-shadow: inset 0 0 0 1px var(--shade-4), 0 0 0 0.15rem var(--shade-2);
					}
				`}</style>
			</div>
		)
	}
}

Button.defaultProps = defaultProps

export default Button
