import NakedButton from "./NakedButton"
import React from "react"
import styled from "styled-components"

const DefaultButton = styled(NakedButton)`
	padding: 0.25rem 1rem;

	border: 0;
	border-radius: ${ props => (props.isRounded ? `2.5rem` : `0.25rem`) };
	outline: none;
	transition: background-color 100ms ease-in-out, box-shadow 100ms ease-in-out, padding-left 180ms ease-in-out;

	cursor: pointer;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 2rem;

	&.isSmall {
		padding: 0.125rem 0.5rem;

		font-size: 0.75rem;
		line-height: 1.5rem;
	}

	&.isSmall:focus,
	&.isSmall:focus:hover {
		box-shadow: inset 0 0 0 1px var(--fr-500), 0 0 0 0.125rem var(--fr-focus);
	}

	&:focus {
		z-index: 1;
	}
	&:focus:not(.isDisabled):not(.isLoading):not(.isSmall) {
		box-shadow: 0 0 0 0.1875rem var(--fr-focus);
	}

	&.isLoading {
		padding-left: 2.5rem;

		color: var(--fr-300);

		pointer-events: none;
	}

	&.isLoading.isSmall {
		padding-left: 1.75rem;
	}
`

export default DefaultButton
