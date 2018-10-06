import DefaultButton from "./DefaultButton"
import styled from "styled-components"

const ButtonSecondary = styled(DefaultButton)`
	background-color: var(--fr-ground);
	box-shadow: inset 0 0 0 1px var(--fr-300);
	color: var(--fr-500);

	&:hover:not(.isLoading):not(.isActive):not(.isDisabled) {
		box-shadow: inset 0 0 0 1px var(--fr-500);
		color: var(--fr-700);
	}

	&.isActive:not(.isDisabled),
	&:active:not(.isDisabled),
	&:active:focus:not(.isDisabled) {
		background-color: var(--fr-100);
		box-shadow: inset 0 0 0 1px var(--fr-500);
		color: var(--fr-900);
	}

	&.isDisabled {
		box-shadow: inset 0 0 0 1px var(--fr-100);
		color: var(--fr-300);
	}

	&:focus:not(.isDisabled):not(.isLoading):not(.isSmall) {
		box-shadow: inset 0 0 0 1px var(--fr-500), 0 0 0 0.1875rem var(--fr-focus);
	}

	&.isSmall:focus:not(.isDisabled):not(.isLoading) {
		box-shadow: inset 0 0 0 1px var(--fr-500), 0 0 0 0.125rem var(--fr-focus);
	}
`

export default ButtonSecondary
