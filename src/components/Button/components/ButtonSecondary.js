import DefaultButton from "./DefaultButton"
import styled from "styled-components"

const ButtonSecondary = styled(DefaultButton)`
	background-color: var(--hl-ground);
	box-shadow: inset 0 0 0 1px var(--hl-300);
	color: var(--hl-500);

	&:hover:not(.isLoading):not(.isActive):not(.isDisabled) {
		box-shadow: inset 0 0 0 1px var(--hl-500);
		color: var(--hl-700);
	}

	&.isActive:not(.isDisabled),
	&:active:not(.isDisabled),
	&:active:focus:not(.isDisabled) {
		background-color: var(--hl-100);
		box-shadow: inset 0 0 0 1px var(--hl-500);
		color: var(--hl-900);
	}

	&.isDisabled {
		box-shadow: inset 0 0 0 1px var(--hl-100);
		color: var(--hl-300);
	}

	&:focus:not(.isDisabled):not(.isLoading):not(.isSmall) {
		box-shadow: inset 0 0 0 1px var(--hl-500), 0 0 0 0.1875rem var(--hl-focus);
	}

	&.isSmall:focus:not(.isDisabled):not(.isLoading) {
		box-shadow: inset 0 0 0 1px var(--hl-500), 0 0 0 0.125rem var(--hl-focus);
	}
`

export default ButtonSecondary
