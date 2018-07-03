import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	className: PropTypes.string,
	text: PropTypes.string.isRequired
}

const NakedTooltip = ({ children, className, text }) => (
	<div className={ className } data-tooltip={ text }>
		{children}
	</div>
)

const Tooltip = styled(NakedTooltip)`
	position: relative;

	display: inline-flex;

	&:hover:after,
	&:focus:after,
	&:hover:before,
	&:focus:before {
		opacity: 1;
	}

	&:after {
		left: 0;
		position: absolute;
		top: calc(100% + 0.25rem);
		z-index: 1;

		display: flex;
		opacity: 0;
		overflow: auto;
		padding: 0.5rem 0.5rem;
		width: 10rem;

		background-color: var(--fr-900);
		border-radius: 0.125rem;
		color: var(--fr-100);
		content: attr(data-tooltip);

		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.25rem;
		pointer-events: none;
	}

	&:before {
		left: 0.75rem;
		position: absolute;
		top: calc(100% - 0.25rem);

		height: 0;
		margin-left: -0.25rem;
		opacity: 0;
		width: 0;

		border: solid transparent;
		border-color: rgba(0, 0, 0, 0);
		border-bottom-color: var(--fr-900);
		border-width: 0.25rem;
		content: " ";

		pointer-events: none;
	}
`

NakedTooltip.propTypes = propTypes

Tooltip.propTypes = propTypes

export default Tooltip
