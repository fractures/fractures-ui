import cc from "classcat"
import PropTypes from "prop-types"
import React from "react"

const propTypes = {
	action: PropTypes.func.isRequired,
	isActive: PropTypes.bool,
	isLoading: PropTypes.bool,
	isRounded: PropTypes.bool,
	type: PropTypes.oneOf(["primary", "secondary"]),
	value: PropTypes.string.isRequired
}

const defaultProps = {
	action: () => null,
	isActive: false,
	isLoading: false,
	isRounded: null,
	type: "primary",
	value: ""
}

const IconLoading = props => (
	<svg xmlns="http://www.w3.org/2000/svg" className="fr-btn__loading">
		<circle fill="none" strokeWidth={ 4 } stroke="var(--fr-300)" cx="12" cy="12" r="10" style={ { opacity: 0.25 } } />
		<circle
			fill="none"
			strokeWidth={ 4 }
			stroke={ props.color || "var(--fr-100)" }
			strokeDasharray="32"
			strokeLinecap="round"
			cx="12"
			cy="12"
			r="10"
		/>
	</svg>
)

const Button = props => {
	const buttonClasses = cc({
		"fr-btn": true,
		"fr-btn-primary": props.type === "primary",
		"fr-btn-secondary": props.type === "secondary",
		"fr-btn--small": props.small,
		"fr-btn--disabled": props.disabled,
		"fr-btn--loading": props.isLoading,
		"fr-btn--active": props.isActive,
		"fr-btn--radius": !props.isRounded,
		"radius-max": props.isRounded
	})

	return (
		<div className="inline-flex flex-ycenter relative" onClick={ e => props.action(e) }>
			<input className={ buttonClasses } type="button" value={ props.value } />
			{props.isLoading && <IconLoading color={ props.type === "secondary" && "var(--fr-500)" } />}
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
					background-color: var(--fr-500);
					color: var(--fr-ground);
				}

				.fr-btn-primary:not(.fr-btn--active):not(.fr-btn--loading):hover {
					background-color: var(--fr-700);
				}

				.fr-btn.fr-btn-primary.fr-btn--active,
				.fr-btn.fr-btn-primary:active,
				.fr-btn.fr-btn-primary:active:focus {
					background-color: var(--fr-900);
					color: var(--fr-100);
				}

				.fr-btn-primary.fr-btn--loading {
					color: var(--fr-300);
				}

				.fr-btn-primary.fr-btn--disabled {
					background-color: var(--fr-100);
					color: var(--fr-300);
				}

				/* Secondary */
				.fr-btn-secondary {
					background-color: var(--fr-ground);
					box-shadow: inset 0 0 0 1px var(--fr-300);
					color: var(--fr-500);
				}

				.fr-btn-secondary:not(.fr-btn--active):not(.fr-btn--loading):hover {
					box-shadow: inset 0 0 0 1px var(--fr-500);
					color: var(--fr-700);
				}

				.fr-btn.fr-btn-secondary.fr-btn--active,
				.fr-btn.fr-btn-secondary:active {
					background-color: var(--fr-100);
					box-shadow: inset 0 0 0 1px var(--fr-500);
					color: var(--fr-900);
				}

				.fr-btn-secondary.fr-btn--disabled {
					box-shadow: inset 0 0 0 1px var(--fr-100);
					color: var(--fr-300);
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
				.fr-btn:focus {
					z-index: 1;
				}

				.fr-btn.fr-btn--small:focus,
				.fr-btn.fr-btn--small:focus:hover {
					box-shadow: inset 0 0 0 1px var(--fr-500), 0 0 0 0.125rem var(--fr-focus);
				}

				.fr-btn:focus:not(.fr-btn--disabled):not(.fr-btn--loading):not(.fr-btn--small) {
					box-shadow: 0 0 0 0.1875rem var(--fr-focus);
				}

				.fr-btn.fr-btn-secondary:focus:not(.fr-btn--disabled):not(.fr-btn--loading):not(.fr-btn--small) {
					box-shadow: inset 0 0 0 1px var(--fr-500), 0 0 0 0.1875rem var(--fr-focus);
				}
			`}</style>
		</div>
	)
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
