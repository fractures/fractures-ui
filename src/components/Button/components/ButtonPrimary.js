import DefaultButton from "./DefaultButton"
import styled from "styled-components"

const ButtonPrimary = styled(DefaultButton)`
	background-color: var(--color-gray-500);
	color: var(--color-gray-0);

	&:hover:not(.isLoading):not(.isActive):not(.isDisabled) {
		background-color: var(--color-gray-700);
	}

	&.isActive:not(.isDisabled),
	&:active:not(.isDisabled),
	&:active:focus:not(.isDisabled) {
		background-color: var(--color-gray-900);
		color: var(--color-gray-500);
	}

	&.isDisabled {
		background-color: var(--color-gray-100);
		color: var(--color-gray-500);
	}
`

export default ButtonPrimary
