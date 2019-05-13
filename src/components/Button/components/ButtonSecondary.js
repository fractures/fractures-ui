import DefaultButton from "./DefaultButton"
import styled from "styled-components"

const ButtonSecondary = styled(DefaultButton)`
	background-color: var(--color-gray-0);
	box-shadow: inset 0 0 0 1px var(--color-gray-300);
	color: var(--color-gray-500);

	&:hover:not(.isLoading):not(.isActive):not(.isDisabled) {
		box-shadow: inset 0 0 0 1px var(--color-gray-500);
		color: var(--color-gray-700);
	}

	&.isActive:not(.isDisabled),
	&:active:not(.isDisabled),
	&:active:focus:not(.isDisabled) {
		background-color: var(--color-gray-100);
		box-shadow: inset 0 0 0 1px var(--color-gray-500);
		color: var(--color-gray-900);
	}

	&.isDisabled {
		box-shadow: inset 0 0 0 1px var(--color-gray-500);
		color: var(--color-gray-300);
	}

	&:focus:not(.isDisabled):not(.isLoading):not(.isSmall) {
		box-shadow: inset 0 0 0 1px var(--color-gray-500), 0 0 0 0.1875rem var(--color-gray-100);
	}

	&.isSmall:focus:not(.isDisabled):not(.isLoading) {
		box-shadow: inset 0 0 0 1px var(--color-gray-500), 0 0 0 0.125rem var(--color-gray-100);
	}
`

export default ButtonSecondary
